import React from "react";
import Phone from "./Phone";
import ManageLinks from "./ManageLinks";

export default function Home({ user }) {
  return (
    <section className="flex flex-col md:flex-row gap-4 h-[calc(100vh_-_92px)] pt-0 p-4">
      <article className="w-full md:w-[40%] md:h-full ">
        <Phone user={user} />
      </article>
      <article className="w-full md:w-[60%] h-full md:overflow-hidden">
        <ManageLinks />
      </article>
    </section>
  );
}
