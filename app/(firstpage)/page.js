// "use server" ; I know this is implicitely a server component, but I want to put this to satisafy my self
// and then from the error i get, I believe next thinks this is now a server action;

import FirstPageClient from "./searchclient";
import {Suspense} from "react";

// This is the firstpage and must be server components and hence,
// it shoud cal the firstPageClient component - which is a client component that would useSearcParams to check
// the state of search...,

export default function Home() {
  

  return (
      <Suspense>
      <FirstPageClient />
      </Suspense>
      
  );
}
