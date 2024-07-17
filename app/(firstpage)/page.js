// "use server"

import FirstPageClient from "./searchclient";

// This is the firstpage and must be server components and hence,
// it shoud cal the searchTemlates component - which is a client component that would useSearcParams to check
// the state of search...,

export default function Home() {
  

  return (
      <>
      <FirstPageClient />
      </>
      
  );
}
