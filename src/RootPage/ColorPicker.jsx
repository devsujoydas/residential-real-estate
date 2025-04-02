import { useState } from "react"

const ColorPicker = () => {

    const [colorBoxPositon, setColorBoxPositon] = useState(1)
    const styleOne = "fixed bg-white p-5 rounded-2xl border z-20 -left-30 top-25 backdrop-blur-2xl transition-all duration-500"
    const styleTwo = "fixed bg-white p-5 rounded-2xl border z-20 left-3 top-25 backdrop-blur-2xl transition-all duration-500"
    console.log()


    return (
        <div onClick={() => setColorBoxPositon(!colorBoxPositon)} className={colorBoxPositon ? styleOne : styleTwo}>
            <div className="flex  items-center gap-2">
                <label htmlFor="primary">PColor</label>
                <input type="color" id="primary" name="primary" className="rounded-full w-10 h-10" />
            </div>
            <div className="flex  items-center gap-2">
                <label htmlFor="primary">SColor</label>
                <input type="color" id="primary" name="primary" className="rounded-full w-10 h-10" />
            </div>
        </div>
    )
}
// 2B 108 Dhupchaya 
export default ColorPicker