import image from '@image-assets/llama.webp';
import {useState, useEffect} from "react";

const MainContent = () => {

    const [data, setData] = useState({
        topText: "hello",
        bottomText: "world",
        url: image
    });

    //called to fetch data on load
    useEffect(function() {
        getImage();
    });


    const [nameData, setNameData] = useState([]);

    //change the top of bottom text
    const handleTextChange = (event) => {
        const {name, value} = event.currentTarget;
        let propertyName = (name === "top_text") ? "topText" : "bottomText";

        //dynamically change the top or bottom text value based on the field
        setData(oldData => ({
            ...oldData,
            [propertyName]: value
        }));
    }

    const getImage = async () => {

        //e.preventDefault();
        try {
            const response = await fetch('https://swapi.info/api/people');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let items = [];
            const data = await response.json();
            data.map(item => {
               items.push(item.name);
            })

            setNameData(items);


        } catch (error) {
            throw new Error(`There was an error here: ${error}`);
        }
    }


    return (
        <section className="flex justify-center">
            <div className="container my-4 px-4 py-2">
                <form className="flex flex-wrap gap-4">
                    <section className="field-section flex flex-wrap flex-col gap-3 w-1/2 flex-[0_0_calc(50%-0.5rem)]">
                        <label htmlFor="top_text" className="font-medium">Top Text</label>
                        <input type="text" id="top_text" name="top_text" placeholder="witty top text here"
                               className="rounded border border-gray-400 py-1 px-2"
                               onChange={handleTextChange}
                               value={data.topText}/>
                    </section>
                    <section className="field-section flex flex-col gap-3  w-1/2 flex-[0_0_calc(50%-0.5rem)]">
                        <label htmlFor="bottom_text" className="font-medium">Bottom Text</label>
                        <input type="text" id="bottom_text" name="bottom_text" placeholder="witty bottom text here"
                               className="rounded border border-gray-400 py-1 px-2"
                               onChange={handleTextChange}
                               value={data.bottomText}/>
                    </section>
                    <section className="button-section w-full">
                        <button name="generate" onClick={getImage} id="generate"
                                className="w-full py-3 px-6 rounded">Get a new Image
                        </button>
                    </section>
                    <section className="image-section w-full">
                        <div className="image-container flex-grow-1 relative">
                            <img src={data.url} className="w-full"/>
                            <span className="top" id="top_text_image"
                                  className="image-text font-bold uppercase text-5xl text-center absolute inset-x-0 top-0 align-text-center my-5">{data.topText}</span>
                            <span className="bottom" id="bottom_text_image"
                                  className="image-text font-bold uppercase text-5xl text-center absolute inset-x-0 bottom-0 bottom-0 my-5">{data.bottomText}</span>
                        </div>
                    </section>
                    <section>
                        {nameData.length > 0 && <ul>
                            {nameData.map((item, index) => { return <li key={index}>{item}</li>})}
                        </ul>}
                    </section>
                </form>
            </div>
        </section>

    )
}
export default MainContent;
