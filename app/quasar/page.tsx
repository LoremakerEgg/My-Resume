"use client";

import Quasar from "../components/Quasar";

export default function QuasarPage() {
  if (typeof window !== "undefined") {
    return <Quasar />;
  } else {
    return (
      <div>
        <h1>An error has occurred. Please contact site administrator!</h1>
      </div>
    );
  }
}
