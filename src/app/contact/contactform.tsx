'use client';

import { useState } from 'react';
import BlurFade from '@/components/magicui/blur-fade';
import { ConfettiButton } from "@/components/magicui/confetti";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '32aab884-66b2-4e3f-8908-e789beda5fba',
                    ...formData
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus({
                    type: 'success',
                    message: 'Message sent! I will get back to you soon.',
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({
                    type: 'error',
                    message: data.message || 'Failed to send message. Please try again later.',
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'An error occurred. Please try again later.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <BlurFade
            delay={0.4}
            duration={0.6}
            className="mt-4"
        >
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg shadow-lg p-6">
                {status.type && (
                    <BlurFade>
                        <div
                            className={`mb-4 p-4 rounded-md ${status.type === 'success'
                                ? 'bg-green-50 dark:bg-green-900/50 text-green-800 dark:text-green-200'
                                : 'bg-red-50 dark:bg-red-900/50 text-red-800 dark:text-red-200'
                                }`}
                        >
                            {status.message}
                        </div>
                    </BlurFade>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-400 shadow-sm focus:border-gray-400 dark:focus:border-gray-600 focus:ring-gray-400 dark:focus:ring-gray-600"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-gray-400 dark:focus:border-gray-600 focus:ring-gray-400 dark:focus:ring-gray-600"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={8}
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-gray-400 dark:focus:border-gray-600 focus:ring-gray-400 dark:focus:ring-gray-600"
                            required
                        />
                    </div>

                    <div>
                        <ConfettiButton className="w-full" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Message'}</ConfettiButton>
                    </div>
                </form>
            </div>
        </BlurFade>
    );
}
