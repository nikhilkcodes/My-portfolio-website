import React, { useState } from 'react';

const Education = () => {
    const [accordion, setAccordion] = useState([
        {
            id: 1,
            title: 'Master of Computer Applications (MCA)',
            description:
                'I am currently pursuing my MCA degree from Sikkim Manipal University. The program focuses on advanced topics in computer science, software development, and information technology.',
            university: 'Sikkim Manipal University',
            completed: false,
        },
        {
            id: 2,
            title: "Bachelor's In Computer Application",
            description:
                "I earned my BCA degree from IMS Noida, affiliated with Chaudhary Charan Singh University (CCSU), renowned for its technical education excellence. Over three years, I acquired diverse knowledge and practical skills in programming, software development, database management, and information technology. I completed my degree in August 2023.",
            university: 'Chaudhary Charan Singh University (CCSU)',
            completed: true,
        },
        {
            id: 3,
            title: 'All India Senior School Certificate Examination',
            description:
                'I completed my 12th-grade education in Commerce with Mathematics at Government Boys Senior Secondary School, New Kondli, under the Central Board of Secondary Education (CBSE) in 2019.',
            board: 'Central Board of Secondary Education (CBSE)',
            completed: true,
        },
        {
            id: 4,
            title: 'All India Secondary School Examination',
            description:
                'I completed my 10th-grade education at Government Boys Secondary School, Mayur Vihar Phase 3, affiliated with the Central Board of Secondary Education (CBSE), in 2017.',
            board: 'Central Board of Secondary Education (CBSE)',
            completed: true,
        },
    ]);

    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        if (activeAccordion === index) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(index);
        }
    };

    return (
        <div className="max-w-3xl mx-auto ">
            {accordion.map((item, index) => (
                <div key={item.id} className="border rounded mb-2 ">
                    <button
                        className="w-full text-left py-2 px-4 bg-gray-200 hover:bg-gray-300 focus:outline-none dark:bg-slate-400 dark:text-black"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="font-semibold">{item.title}</span>
                        <span className="ml-auto">
                            {item.completed ? (
                                <span className="badge rounded-pill bg-green-500 text-white ml-2">
                                    Completed
                                </span>
                            ) : (
                                <span className="badge rounded-pill bg-red-500 text-white ml-2">
                                    In Progress
                                </span>
                            )}
                        </span>
                    </button>
                    {activeAccordion === index && (
                        <div className="px-4 py-2">
                            <p className="text-gray-800 dark:text-white">{item.description}</p>
                            {item.university && (
                                <p className="text-gray-600">
                                    University: {item.university}
                                </p>
                            )}
                            {item.board && (
                                <p className="text-gray-600 dark:text-white">
                                    Board: {item.board}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Education;
