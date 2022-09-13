import React from 'react';
import styles from './ContactForm/contactForm.module.scss';
import classNames from 'classnames';
import Script from 'next/script';

const ContactForm = () => {
    return (
        <section id={'before-footer'} className={classNames(styles.cont)}>
            <h3 className={classNames('heading-3', styles.contact_form_heading)}>{`Let's have a chat`}</h3>

            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/swsw?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=e5e5e5&text_color=000000"
                style={{
                    minWidth: '320px',
                    height: '650px',
                }}
            ></div>

            <Script
                id="stripe-js"
                strategy={'lazyOnload'}
                src="https://assets.calendly.com/assets/external/widget.js"
            />
            {/*<script type="text/javascript" src="" async></script>*/}
            {/*<form className={styles.form}>*/}
            {/*    <div className={styles.field_box}>*/}
            {/*        <label htmlFor="name" className={styles.label}>*/}
            {/*            Name*/}
            {/*        </label>*/}
            {/*        <input type="text" name="name" id="name" className={styles.input} />*/}
            {/*    </div>*/}

            {/*    <div className={styles.field_box}>*/}
            {/*        <label htmlFor="email" className={styles.label}>*/}
            {/*            E-mail*/}
            {/*        </label>*/}
            {/*        <input type="email" name="email" id="email" className={styles.input} />*/}
            {/*    </div>*/}

            {/*    <div className={styles.field_box}>*/}
            {/*        <label htmlFor="email" className={styles.label}>*/}
            {/*            Message*/}
            {/*        </label>*/}
            {/*        <textarea name="email" id="email" className={styles.input} />*/}
            {/*    </div>*/}

            {/*    <button className={styles.submit}>Send</button>*/}
            {/*</form>*/}
        </section>
    );
};

export default ContactForm;
