<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-img :lazy-src='img' :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary
        mainTitle="PRIVACY POLICY"
        paragraph="Last updated July 07, 2021"
      />
    </SectionPadding>

    <v-divider></v-divider>

    <SectionPadding class="backgroundShade">
      <v-container>
        <p class="body-2">
          Thank you for choosing to be part of our community at Real Estate Ja
          ("Company", "we", "us", "our"). We are committed to protecting your
          personal information and your right to privacy. If you have any
          questions or concerns about this privacy notice, or our practices with
          regards to your personal information, please contact us at
          <nuxt-link :to="{ name: 'contact' }">Contact Page</nuxt-link>.
          <br /><br />
          When you and more generally, use any of our services (the "Services",
          which include the ), we appreciate that you are trusting us with your
          personal information. We take your privacy very seriously. In this
          privacy notice, we seek to explain to you in the clearest way possible
          what information we collect, how we use it and what rights you have in
          relation to it. We hope you take some time to read through it
          carefully, as it is important. If there are any terms in this privacy
          notice that you do not agree with, please discontinue use of our
          Services immediately.
          <br /><br />
          This privacy notice applies to all information collected through our
          Services (which, as described above, includes our ), as well as, any
          related services, sales, marketing or events.
          <br /><br />
          Please read this privacy notice carefully as it will help you
          understand what we do with the information that we collect.
        </p></v-container
      >
      <v-container>
        <p class="text-h6">
          TABLE OF CONTENTS
        </p>
        <ul class="body-2">
          <li>1. WHAT INFORMATION DO WE COLLECT?</li>
          <li>2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</li>
          <li>3. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
          <li>4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
          <li>5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</li>
          <li>6. HOW LONG DO WE KEEP YOUR INFORMATION?</li>
          <li>7. DO WE COLLECT INFORMATION FROM MINORS?</li>
          <li>8. WHAT ARE YOUR PRIVACY RIGHTS?</li>
          <li>9. CONTROLS FOR DO-NOT-TRACK FEATURES</li>
          <li>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
          <li>11. DO WE MAKE UPDATES TO THIS NOTICE?</li>
          <li>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
          <li>
            13. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </li>
        </ul>
      </v-container>
      <v-container>
        <p class="text-h6">
          1. WHAT INFORMATION DO WE COLLECT?
        </p>
        <p class="body-1 font-weight-bold">
          Personal information you disclose to us
        </p>
        <p class="body-2">
          In Short: We collect personal information that you provide to us.
          <br /><br />
          We collect personal information that you voluntarily provide to us
          when you register on the express an interest in obtaining information
          about us or our products and Services, when you participate in
          activities on the (such as by posting messages in our online forums or
          entering competitions, contests or giveaways) or otherwise when you
          contact us.
          <br /><br />
          The personal information that we collect depends on the context of
          your interactions with us and the , the choices you make and the
          products and features you use. The personal information we collect may
          include the following:
          <br /><br />
          Social Media Login Data. We may provide you with the option to
          register with us using your existing social media account details,
          like your Facebook, Twitter or other social media account. If you
          choose to register in this way, we will collect the information
          described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?"
          below.
          <br /><br />
          All personal information that you provide to us must be true, complete
          and accurate, and you must notify us of any changes to such personal
          information.
        </p>
        <p class="body-1 font-weight-bold">
          Information automatically collected
        </p>
        <p class="body-2">
          In Short: Some information — such as your Internet Protocol (IP)
          address and/or browser and device characteristics — is collected
          automatically when you visit our .
          <br /><br />
          We automatically collect certain information when you visit, use or
          navigate the . This information does not reveal your specific identity
          (like your name or contact information) but may include device and
          usage information, such as your IP address, browser and device
          characteristics, operating system, language preferences, referring
          URLs, device name, country, location, information about how and when
          you use our and other technical information. This information is
          primarily needed to maintain the security and operation of our , and
          for our internal analytics and reporting purposes.
          <br /><br />
          Like many businesses, we also collect information through cookies and
          similar technologies.
        </p>
      </v-container>
      <v-container>
        <p class="text-h6">
          2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
        </p>
        <p class="body-2">
          In Short: We only share information with your consent, to comply with
          laws, to provide you with services, to protect your rights, or to
          fulfill business obligations.
          <br /><br />
          We may process or share your data that we hold based on the following
          legal basis: More specifically, we may need to process your data or
          share your personal information in the following situations:
        </p>
        <ul class="body-2">
          <li>
            Business Transfers. We may share or transfer your information in
            connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our
            business to another company.
          </li>
          <li>
            Affiliates. We may share your information with our affiliates, in
            which case we will require those affiliates to honour this privacy
            notice. Affiliates include our parent company and any subsidiaries,
            joint venture partners or other companies that we control or that
            are under common control with us.
          </li>
          <li>
            Business Partners. We may share your information with our business
            partners to offer you certain products, services or promotions.
          </li>
          <li>
            Other Users. When you share personal information or otherwise
            interact with public areas of the , such personal information may be
            viewed by all users and may be publicly made available outside the
            in perpetuity. If you interact with other users of our and register
            for our through a social network (such as Facebook), your contacts
            on the social network will see your name, profile photo, and
            descriptions of your activity. Similarly, other users will be able
            to view descriptions of your activity, communicate with you within
            our , and view your profile.
          </li>
        </ul>
      </v-container>
      <v-container>
        <p class="text-h6">
          3. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </p>
        <p class="body-2">
          In Short: We may use cookies and other tracking technologies to
          collect and store your information.
          <br /><br />
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to access or store information. Specific information about
          how we use such technologies and how you can refuse certain cookies is
          set out in our Cookie Notice.
        </p>
      </v-container>
      <v-container>
        <p class="text-h6">
          4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
        </p>
        <p class="body-2">
          In Short: If you choose to register or log in to our services using a
          social media account, we may have access to certain information about
          you.
          <br /><br />
          Our offers you the ability to register and login using your
          third-party social media account details (like your Facebook or
          Twitter logins). Where you choose to do this, we will receive certain
          profile information about you from your social media provider. The
          profile information we receive may vary depending on the social media
          provider concerned, but will often include your name, email address,
          friends list, profile picture as well as other information you choose
          to make public on such social media platform.
          <br /><br />
          We will use the information we receive only for the purposes that are
          described in this privacy notice or that are otherwise made clear to
          you on the relevant . Please note that we do not control, and are not
          responsible for, other uses of your personal information by your
          third-party social media provider. We recommend that you review their
          privacy notice to understand how they collect, use and share your
          personal information, and how you can set your privacy preferences on
          their sites and apps.
        </p>
      </v-container>
      <v-container>
        <p class="text-h6">
          5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
        </p>
        <p class="body-2">
          In Short: We may transfer, store, and process your information in
          countries other than your own.
          <br /><br />
          Our servers are located in. If you are accessing our from outside,
          please be aware that your information may be transferred to, stored,
          and processed by us in our facilities and by those third parties with
          whom we may share your personal information (see "WILL YOUR
          INFORMATION BE SHARED WITH ANYONE?" above), in and other countries.
          <br /><br />
          If you are a resident in the European Economic Area (EEA) or United
          Kingdom (UK), then these countries may not necessarily have data
          protection laws or other similar laws as comprehensive as those in
          your country. We will however take all necessary measures to protect
          your personal information in accordance with this privacy notice and
          applicable law.
        </p>
      </v-container>
      <v-container>
        <p class="text-h6">
          6. HOW LONG DO WE KEEP YOUR INFORMATION?
        </p>
        <p class="body-2">
          In Short: We keep your information for as long as necessary to fulfill
          the purposes outlined in this privacy notice unless otherwise required
          by law.
          <br /><br />
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting or other legal requirements).
          <br /><br />
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </p>
      </v-container>
      <v-container>
        <p class="text-h6">
          7. DO WE COLLECT INFORMATION FROM MINORS?
        </p>
        <p class="body-2">
          In Short: We do not knowingly collect data from or market to children
          under 18 years of age.
          <br /><br />
          We do not knowingly solicit data from or market to children under 18
          years of age. By using the , you represent that you are at least 18 or
          that you are the parent or guardian of such a minor and consent to
          such minor dependent’s use of the . If we learn that personal
          information from users less than 18 years of age has been collected,
          we will deactivate the account and take reasonable measures to
          promptly delete such data from our records. If you become aware of any
          data we may have collected from children under age 18, please contact
          us at: <nuxt-link :to="{ name: 'contact' }">Contact Page</nuxt-link>
        </p>
      </v-container>
      <v-container>
        <p class="text-h6">
          8. WHAT ARE YOUR PRIVACY RIGHTS?
        </p>
        <p class="body-2">
          In Short: You may review, change, or terminate your account at any
          time.
          <br /><br />
          If you are a resident in the EEA or UK and you believe we are
          unlawfully processing your personal information, you also have the
          right to complain to your local data protection supervisory authority.
          You can find their contact details here:
          http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
          <br /><br />
          If you are a resident in Switzerland, the contact details for the data
          protection authorities are available here:
          https://www.edoeb.admin.ch/edoeb/en/home.html.
        </p>
        <p class="body-1 font-weight-bold">
          Account Information
        </p>
        <p class="body-2">
          If you would at any time like to review or change the information in
          your account or terminate your account, you can: Upon your request to
          terminate your account, we will deactivate or delete your account and
          information from our active databases. However, we may retain some
          information in our files to prevent fraud, troubleshoot problems,
          assist with any investigations, enforce our Terms of Use and/or comply
          with applicable legal requirements.
          <br /><br />
          Opting out of email marketing: You can unsubscribe from our marketing
          email list at any time by clicking on the unsubscribe link in the
          emails that we send or by contacting us using the details provided
          below. You will then be removed from the marketing email list —
          however, we may still communicate with you, for example to send you
          service-related emails that are necessary for the administration and
          use of your account, to respond to service requests, or for other
          non-marketing purposes. To otherwise opt-out, you may:
        </p>
      </v-container>
      <v-container>
        <p class="text-h6">
          9. CONTROLS FOR DO-NOT-TRACK FEATURES
        </p>
        <p class="body-2">
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track ("DNT") feature or setting you can
          activate to signal your privacy preference not to have data about your
          online browsing activities monitored and collected. At this stage no
          uniform technology standard for recognizing and implementing DNT
          signals has been finalized. As such, we do not currently respond to
          DNT browser signals or any other mechanism that automatically
          communicates your choice not to be tracked online. If a standard for
          online tracking is adopted that we must follow in the future, we will
          inform you about that practice in a revised version of this privacy
          notice.
        </p>
      </v-container>
      <v-container>
        <p class="text-h6">
          10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
        </p>
        <p class="body-2">
          In Short: Yes, if you are a resident of California, you are granted
          specific rights regarding access to your personal information.
          <br /><br />
          California Civil Code Section 1798.83, also known as the "Shine The
          Light" law, permits our users who are California residents to request
          and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third
          parties for direct marketing purposes and the names and addresses of
          all third parties with which we shared personal information in the
          immediately preceding calendar year. If you are a California resident
          and would like to make such a request, please submit your request in
          writing to us using the contact information provided below.
          <br /><br />
          If you are under 18 years of age, reside in California, and have a
          registered account with , you have the right to request removal of
          unwanted data that you publicly post on the . To request removal of
          such data, please contact us using the contact information provided
          below, and include the email address associated with your account and
          a statement that you reside in California. We will make sure the data
          is not publicly displayed on the , but please be aware that the data
          may not be completely or comprehensively removed from all our systems
          (e.g. backups, etc.).
        </p>
      </v-container>
      <v-container>
        <p class="text-h6">
          11. DO WE MAKE UPDATES TO THIS NOTICE?
        </p>
        <p class="body-2">
          In Short: Yes, we will update this notice as necessary to stay
          compliant with relevant laws.
          <br /><br />
          We may update this privacy notice from time to time. The updated
          version will be indicated by an updated "Revised" date and the updated
          version will be effective as soon as it is accessible. If we make
          material changes to this privacy notice, we may notify you either by
          prominently posting a notice of such changes or by directly sending
          you a notification. We encourage you to review this privacy notice
          frequently to be informed of how we are protecting your information.
        </p>
      </v-container>
      <v-container>
        <p class="text-h6">
          12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </p>
        <p class="body-2">
          If you have questions or comments about this notice, you may contact
          us via our
          <nuxt-link :to="{ name: 'contact' }">Contact Page</nuxt-link>
        </p>
      </v-container>
      <v-container>
        <p class="text-h6">
          13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
          YOU?
        </p>
        <p class="body-2">
          Based on the applicable laws of your country, you may have the right
          to request access to the personal information we collect from you,
          change that information, or delete it in some circumstances. To
          request to review, update, or delete your personal information, please
          submit a request via our
          <nuxt-link :to="{ name: 'contact' }">Contact Page</nuxt-link>.
        </p>
      </v-container>
    </SectionPadding>
  </div>
</template>

<script>
import img from "~/assets/images/houses/3.jpg";
export default {
  data() {
    return {
      img: img,
      title: "Privacy Policy | Real Estate Ja",
      description: "privacy Policy"
    };
  }
};
</script>

<style lang="scss" scoped></style>
