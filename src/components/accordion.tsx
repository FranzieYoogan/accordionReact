import './styles.css'
import { useState } from "react";
function Accordion() {

    const data = [

        {

            id: '1',
            question: 'What are accordion components ?',
            answer: '"Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.',


        },

        {
      id  : '2',
      question: "What are they used for?",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      id  : '3',
      question: "Accordion as a musical instrument",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      id  : '4',
      question: "Can I create an accordion component with a different framework?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },

    ];

    const [selected, setSelected] = useState<string | null>(null)

    const handleSingleSelection = (currentId:string) => {

        setSelected(currentId)

        if(selected === currentId) {

            setSelected(null)

        }

    }

    return(

        <>

            <div className="wrapper">
                        
                    <div className="accordion">

                           {data && data.length > 0 ? data.map((item) => (

                            <div className="item" key={item.id}>

                                <div className="title" onClick={() => handleSingleSelection(item.id)}>

                                    <h3>{item.question}</h3>
                                    <span>+</span>

                                </div>

                                    {selected === item.id && <div className="content">{item.answer}</div>}

                            </div>

                           )) : <h1>No data</h1>}

                    </div>

            </div>
        
        </>

    )

}

export default Accordion