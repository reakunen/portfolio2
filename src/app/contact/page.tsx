import { TextAnimate } from '@/components/magicui/text-animate';
import ContactForm from './contactform';

export const metadata = {
    title: "Contact",
    description: "Contact me for any questions or comments.",
  };

export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center">
                <TextAnimate
                    as="h1"
                    animation="blurInDown"
                    className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2"
                    once={true}
                >
                    Contact Me 🤙
                </TextAnimate>
                <TextAnimate
                    animation="blurInUp"
                    delay={0.2}
                    className="text-xl text-gray-600 dark:text-gray-300 mb-8"
                    once={true}
                >
                    Send me a message and I&apos;ll get back to you as soon as possible.
                </TextAnimate>
            </div>

            <ContactForm />
        </div>
    );
}
