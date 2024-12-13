  import React from "react";
  import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

  const HoverDevCards = () => {
    return (
      <div className="mt-4">
        {/* <p className="text-xl font-semibold mb-2">Settings</p> */}
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          <Card
            title="Assignment"
            subtitle="Manage assignment"
            href="/assignment"
            Icon={FiUser}
          />
          <Card title="Document Ai" subtitle="Generate quiz and homework" href="/documentai" Icon={FiMail} />
          <Card title="Kelas" subtitle="Atur dan tambah kelas" href="/kelas" Icon={FiUsers} />
          <Card
            title="Bantuan"
            subtitle="Hubungi kami"
            href="https://wa.me/+6285174346212"
            Icon={FiCreditCard}
          />
        </div>
      </div>
    );
  };

  const Card = ({ title, subtitle, Icon, href }: { title: string; subtitle: string; Icon: React.ComponentType<any>; href: string }) => {
    return (
      <a
        href={href}
        className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

        <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
        <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
        <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
        <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
          {subtitle}
        </p>
      </a>
    );
  };

  export default HoverDevCards;