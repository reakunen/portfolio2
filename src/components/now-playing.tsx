'use client';

import { useEffect, useState } from 'react';
import { Badge } from './ui/badge';

interface NowPlayingResponse {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    album?: string;
    albumImageUrl?: string;
    songUrl?: string;
}

export default function NowPlaying() {
    const [data, setData] = useState<NowPlayingResponse | null>(null);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            const res = await fetch('/api/spotify');
            const data = await res.json();
            setData(data);
        };

        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 30000); // Update every 30 seconds

        return () => clearInterval(interval);
    }, []);

    if (!data?.isPlaying) {
        return (
            <div className="flex items-center gap-2">
                <Badge variant="secondary">Not Playing</Badge>
                <span className="text-sm text-muted-foreground">Spotify</span>
            </div>
        );
    }

    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={data.songUrl}
            className="flex items-center gap-2 transition-opacity hover:opacity-75"
        >
            <div className="flex items-center gap-2">
                {data.albumImageUrl && (
                    <img
                        alt={data.album}
                        src={data.albumImageUrl}
                        className="w-10 h-10 rounded-sm"
                    />
                )}
                <div className="flex flex-col">
                    <span className="text-sm font-medium">{data.title}</span>
                    <span className="text-xs text-muted-foreground">{data.artist}</span>
                </div>
            </div>
        </a>
    );
} 