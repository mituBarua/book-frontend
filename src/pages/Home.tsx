
import Footer from '@/layouts/Footer';

import AllBooks from '@/components/AllBooks';
import Search from '@/components/Search';


export default function Home() {
  return (
    <>
      <div className="  mx-auto ">
      {/* <Search/> */}
       <AllBooks/>
      </div>
   
      <Footer />
    </>
  );
}
