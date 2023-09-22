import Footer from "../comp/Footer";
import Pagination from "./compo/Pagination";


export default function RootLayout(props: {
    filters: React.ReactNode,
    children: React.ReactNode,
    product: React.ReactNode,
}) {
    return (
        <div className='relative top-40 '>
            {/* {props.children} */}
            <div className=' '>
                <div className='flex'>
                    {/* Filters Component */}
                    <div className="w-1/5">
                        {props.filters}
                    </div>
                    {/* Products */}
                    <div className='md:basis-9/12 hover:shadow-2xl border-slate-100 border-2'>
                        {props.product}
                    </div>
                </div>
            </div>
            {/* Pagination Component */}
            <div className='flex justify-center m-3 pb-5'>
                <Pagination />
            </div>
            {/* Footer Component */}
            <Footer />

        </div>)
}
