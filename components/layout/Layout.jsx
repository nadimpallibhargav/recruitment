import React from "react";
import { useRouter } from "next/router";

import Footer from "../footer";
import Header from "../header";
import DarkHeader from "../header/DarkHeader";

function Layout({ children }) {
  const route = useRouter();

  const isPage = () => {
    if (
      route.pathname === "/" ||
      route.pathname === "/vacancy" ||
      route.pathname === "/addcandidate" ||
      route.pathname === "/analytics" ||
      route.pathname === "/dashboard" ||
      route.pathname === "/dashboard/hr" ||
      route.pathname === "/dashboard/client" ||
      route.pathname === "/dashboard/client/hr" ||
      route.pathname === "/candidates" ||
      route.pathname === "/addvacancy" ||
      route.pathname === "/hrround" ||
      route.pathname === "/importcandidates" ||
      route.pathname === "/candidatedetails" ||
      route.pathname === "/unmappeddetails" ||
      route.pathname === "/manageuser" ||
      route.pathname === "/manage/interviewer-billing" ||
      route.pathname === "/mapcandidates" ||
      route.pathname === "/interviewer" ||
      route.pathname === "/interview-details" ||
      route.pathname === "/interviewer-dashboard" ||
      route.pathname === "/interviewer-earnings" ||
      route.pathname === "/qr-admin-clients" ||
      route.pathname === "/qr-admin-candidatedetails" ||
      route.pathname === "/qr-admin-clients-details" ||
      route.pathname === "/qr-admin-clients-payment-history" ||
      route.pathname === "/qr-admin-interview" ||
      route.pathname === "/qr-admin-question-bank" ||
      route.pathname === "/qr-admin-manage-language" ||
      route.pathname === "/qr-admin-manageuser" ||
      route.pathname === "/qr-admin-clients-analytics" ||
      route.pathname === "/settings"
    ) {
      return (
        <>
          <Header headerName="home" />
          <main>{children}</main>
          <Footer />
        </>
      );
    } else if (route.pathname === "/signin") {
      return (
        <>
          <Header headerName="signin" headerClass="transparent" />
          <main>{children}</main>
          <Footer />
        </>
      );
    } else if (route.pathname === "/signup") {
      return (
        <>
          <Header headerName="signup" headerClass="transparent" />
          <main>{children}</main>
          <Footer />
        </>
      );
    } else if (route.pathname === "/interview") {
      return (
        <>
          <DarkHeader headerName="interview" />
          <main className="blueScreenMain">{children}</main>
          <Footer />
        </>
      );
    } else if (
      route.pathname === "/techround" ||
      route.pathname === "/techround-candidate-exited"
    ) {
      return (
        <>
          <header className="techroundCandidateHeader">&nbsp;</header>
          <main className="blueScreenMain">{children}</main>
          <Footer />
        </>
      );
    } else if (
      route.pathname === "/techround-candidate-joined" ||
      route.pathname === "/interviewer-feedback"
    ) {
      return (
        <>
          <DarkHeader headerName="techround-candidate-joined" />
          <main className="blueScreenMain">{children}</main>
          <Footer />
        </>
      );
    } else if (route.pathname === "/techround-interviewer-joined") {
      return (
        <>
          <DarkHeader headerName="techround-interviewer-joined" />
          <main className="blueScreenMain">{children}</main>
          <Footer />
        </>
      );
    } else if (route.pathname === "/qr-admin-question-bank-add-question") {
      return (
        <>
          <DarkHeader />
          <main className="blueScreenMain">{children}</main>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Header headerClass="transparent" />
          <main>{children}</main>
          <Footer />
        </>
      );
    }
  };
  return <>{isPage()}</>;
}

export default Layout;
