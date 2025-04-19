'use client';

import { TextAnimate } from '@/components/magicui/text-animate';
import ContactForm from './contactform';

export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center">
                <TextAnimate
                    as="h1"
                    animation="blurInDown"
                    className="text-4xl font-bold text-gray-900 mb-4"
                    once={true}
                >
                    Contact Me
                </TextAnimate>
                <TextAnimate
                    animation="blurInUp"
                    delay={0.2}
                    className="text-xl text-gray-600 mb-8"
                    once={true}
                >
                    Send me a message and I'll get back to you as soon as possible.
                </TextAnimate>
            </div>

            <ContactForm />
        </div>
    );
}
