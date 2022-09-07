import { NextPage } from 'next';
import Footer from '@components/Footer';
import LocomotiveLayout from '@layouts/LocomotiveLayout';
import ContactForm from '@modules/contact/contactForm';

const ContactFormPage: NextPage = () => {
    return (
        <>
            <LocomotiveLayout>
                <ContactForm />
                <Footer />
            </LocomotiveLayout>
        </>
    );
};

export default ContactFormPage;
