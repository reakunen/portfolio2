"use client";

import type {
    GlobalOptions as ConfettiGlobalOptions,
    CreateTypes as ConfettiInstance,
    Options as ConfettiOptions,
} from "canvas-confetti";
import confetti from "canvas-confetti";
import type { ReactNode } from "react";
import React, {
    createContext,
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
} from "react";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Api = {
    fire: (options?: ConfettiOptions) => void;
};

type Props = React.ComponentPropsWithRef<"canvas"> & {
    options?: ConfettiOptions;
    globalOptions?: ConfettiGlobalOptions;
    manualstart?: boolean;
    children?: ReactNode;
};

export type ConfettiRef = Api | null;

const ConfettiContext = createContext<Api>({} as Api);

// Define component first
const ConfettiComponent = forwardRef<ConfettiRef, Props>((props, ref) => {
    const {
        options,
        globalOptions = { resize: true, useWorker: true },
        manualstart = false,
        children,
        ...rest
    } = props;
    const instanceRef = useRef<ConfettiInstance | null>(null);

    const canvasRef = useCallback(
        (node: HTMLCanvasElement) => {
            if (node !== null) {
                if (instanceRef.current) return;
                instanceRef.current = confetti.create(node, {
                    ...globalOptions,
                    resize: true,
                });
            } else {
                if (instanceRef.current) {
                    instanceRef.current.reset();
                    instanceRef.current = null;
                }
            }
        },
        [globalOptions],
    );

    const fire = useCallback(
        async (opts = {}) => {
            try {
                await instanceRef.current?.({ ...options, ...opts });
            } catch (error) {
                console.error("Confetti error:", error);
            }
        },
        [options],
    );

    const api = useMemo(
        () => ({
            fire,
        }),
        [fire],
    );

    useImperativeHandle(ref, () => api, [api]);

    useEffect(() => {
        if (!manualstart) {
            (async () => {
                try {
                    await fire();
                } catch (error) {
                    console.error("Confetti effect error:", error);
                }
            })();
        }
    }, [manualstart, fire]);

    return (
        <ConfettiContext.Provider value={api}>
            <canvas ref={canvasRef} {...rest} />
            {children}
        </ConfettiContext.Provider>
    );
});

// Set display name immediately
ConfettiComponent.displayName = "Confetti";

// Export as Confetti
export const Confetti = ConfettiComponent;

interface ConfettiButtonProps extends ButtonProps {
    options?: ConfettiOptions &
    ConfettiGlobalOptions & { canvas?: HTMLCanvasElement };
    children?: React.ReactNode;
}

const ConfettiButtonComponent = ({
    options,
    children,
    ...props
}: ConfettiButtonProps) => {
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        try {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            await confetti({
                ...options,
                origin: {
                    x: x / window.innerWidth,
                    y: y / window.innerHeight,
                },
            });
        } catch (error) {
            console.error("Confetti button error:", error);
        }
    };

    return (
        <Button onClick={handleClick} {...props}
            className={cn(
                "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                // before styles
                "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:[filter:blur(calc(0.8*1rem))]",
                // light mode colors
                "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
                // dark mode colors
                "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
                props.className,
            )}>
            {children}
        </Button>
    );
};

ConfettiButtonComponent.displayName = "ConfettiButton";

export const ConfettiButton = ConfettiButtonComponent;
