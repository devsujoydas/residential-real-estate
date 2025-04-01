import Rating from "./Rating"

const TestimonialCard = () => {
    return (
        <div>
            <div className="bg-white rounded-3xl text-black p-8">
                <h1 className="md:text-xl md:leading-8">“A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence. From the moment I stepped into this community, I knew it was where I wanted to live. The commitment to eco-friendly living, coupled with modern amenities, is truly commendable.”</h1>

                <div className="flex justify-between items-center">
                    <Rating />
                    <img className="md:w-14 w-10" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/qoute.svg" alt="" />
                </div>
                <div className="flex items-center gap-4">
                    <img className="rounded-full md:w-fit w-12" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/testi_1_1.png" alt="" />
                    <div>
                        <h1 className="md:text-2xl text-xl font-outfit font-semibold">Andrew Simon</h1>
                        <h1 className="md:text-md text-xs">Property Expert</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard