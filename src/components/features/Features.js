import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Development"
          des="I develop dynamic user interfaces with React.js, focusing on state management, 
          reusable components, and API integration."
          icon = {<FaReact/>}
         
        />
        <Card
          title="Blockchain Development"
          des="I develop smart contracts and dApps on Ethereum, ensuring secure 
          blockchain solutions and handling token creation."
          icon={<SiSolidity />}
        />
        <Card
          title="Competitive Programming"
          des="I solve algorithmic problems efficiently, enhance my coding skills,
          and participate in contests to improve my problem-solving abilities."
        />
      </div>
    </section>
  );
}

export default Features