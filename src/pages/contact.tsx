import { NextPage } from 'next';
import Contact from '@modules/contact';
import Footer from '@components/Footer';
import LocomotiveLayout from '@layouts/LocomotiveLayout';

const ContactPage: NextPage = () => {
    return (
        <>
            <LocomotiveLayout>
                <Contact />
                <Footer />
            </LocomotiveLayout>
        </>
    );
};

export default ContactPage;
