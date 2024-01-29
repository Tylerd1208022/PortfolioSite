"use client";
import React, { useState } from "react";
import SideNavBar from "./components/SideNavBar";
import AboutMePage from "./components/AboutMe/AboutMePage";
import PortfolioTopicPage from "./components/Portfolio/PortfolioTopicPage";
import { pages } from "next/dist/build/templates/app-page";
import AcademicExperience from "./components/Academics/AcademicExperience";
import ProfessionalExperience from "./components/ProfessionalExperience";
import BuildAComputer from "./components/BuilderActivity/BuildAComputer";
import { ScoreProvider } from "./context";

export default function Home() {

  const [pageState, setPageState] = useState<string>('About Me');
  const renderPage = () => {
    switch (pageState) {
      case 'About Me':
        return <AboutMePage/>;
      case 'Academic':
        return <AcademicExperience/>
      case 'Professional':
        return <ProfessionalExperience/>
      case 'Quiz':
        return <BuildAComputer/>
      default:
        return <PortfolioTopicPage Topic={pageState}/>
    }
  }

  return (
    <ScoreProvider>
      <main className="display: flex height: 100vh">
          <SideNavBar setPageState={setPageState} pageState={pageState} />
          {renderPage()}
      </main>
    </ScoreProvider>
  );
}
