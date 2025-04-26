'use client';

import { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogReactionsProps {
    slug: string;
}

export default function BlogReactions({ slug }: BlogReactionsProps) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Fetch initial likes/dislikes
        fetch(`/blog/${slug}?slug=${slug}`)
            .then((res) => res.json())
            .then((data) => {
                setLikes(data.likes);
                setDislikes(data.dislikes);
            });
    }, [slug]);

    const handleReaction = async (action: 'like' | 'dislike') => {
        if (isLoading) return;

        setIsLoading(true);
        try {
            const res = await fetch(`/blog/${slug}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ slug, action }),
            });

            const data = await res.json();
            setLikes(data.likes);
            setDislikes(data.dislikes);
        } catch (error) {
            console.error('Failed to update reaction:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center gap-4">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => handleReaction('like')}
                disabled={isLoading}
                className="flex items-center gap-2"
            >
                <ThumbsUp className="size-4" />
                <span>{likes}</span>
            </Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => handleReaction('dislike')}
                disabled={isLoading}
                className="flex items-center gap-2"
            >
                <ThumbsDown className="size-4" />
                <span>{dislikes}</span>
            </Button>
        </div>
    );
} 