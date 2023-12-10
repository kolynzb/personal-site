/* eslint-disable @next/next/no-css-tags */
import { Metadata } from "next";
import Script from "next/script";
import MailModal from "@components/landing/MailModal";
import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/Navbar";

export const metadata: Metadata = {
  title: "Atuhaire Collins Benda Personal Website",
  description: "Atuhaire Collins Benda Personal Portfolio",
  authors: [{ name: "Atuhaire Collins Benda", url: "collinsbenda.com" }],
  keywords: ["portfolio"],
  applicationName: "Atuhaire Collins Benda Portfolio",
  viewport:
    "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0",
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      url: "/favicon/safari-pinned-tab.svg",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-16x16.png",
    },
  ],
  manifest: "/favicon/site.webmanifest",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <!-- CSS --> */}
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
      <link rel="stylesheet" href="/assets/css/animate.min.css" />
      <link rel="stylesheet" href="/assets/css/jquery.pagepiling.css" />
      <link rel="stylesheet" href="/assets/css/jquery.fancybox.min.css" />
      <link rel="stylesheet" href="/assets/css/LineIcons.css" />
      {/* <!-- Main CSS --> */}
      <link rel="stylesheet" href="/assets/css/style.css" />
      <body>
        <main className="body-copyright-light">
          <div className="wrapper">
            <Navbar />

            <div id="content" className="content">
              <div className="homepage-personal a-pagepiling">{children}</div>
            </div>
            <Footer />
          </div>
          <MailModal />
        </main>

        {/* <!-- jQuery Min JS --> */}
        <Script
          strategy="beforeInteractive"
          src="/assets/js/jquery.min.js"
        ></Script>
        {/* <!-- Bootstrap Min JS --> */}
        <Script
          strategy="beforeInteractive"
          src="/assets/js/bootstrap.bundle.min.js"
        ></Script>
        {/* <!-- Owl Carousel JS --> */}
        <Script
          strategy="beforeInteractive"
          src="/assets/js/owl.carousel.min.js"
        ></Script>
        {/* <!-- jQuery Page Piling JS --> */}
        <Script
          strategy="beforeInteractive"
          src="/assets/js/jquery.pagepiling.min.js"
        ></Script>
        {/* <!-- jQuery Fancy Box JS --> */}
        <Script
          strategy="beforeInteractive"
          src="/assets/js/jquery.fancybox.min.js"
        ></Script>
        {/* <!-- jQuery Validate JS --> */}
        <Script
          strategy="beforeInteractive"
          src="/assets/js/jquery.validate.min.js"
        ></Script>
        <Script strategy="beforeInteractive" src="js/smoothscroll.js"></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/animsition.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/wow.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/jquery.magnific-popup.min.js"
        ></Script>
        {/* main script */}
        <Script strategy="lazyOnload" src="/assets/js/script.js"></Script>
      </body>
    </html>
  );
}
