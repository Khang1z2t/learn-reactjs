import React from "react";

function App() {
    const [job, setJob] = React.useState("");
    const [jobs, setJobs] = React.useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem("jobs")) ?? [];
        return storageJobs;
    });

    const url = `${process.env.REACT_APP_BACK_END_URL}`;
    console.log(url);


    const handleAdd = () => {
        setJobs((prev) => {
            const newJobs = [...prev, job];

            const json = JSON.stringify(newJobs);
            localStorage.setItem("jobs", json);
            return newJobs;
        });
        setJob("");
    };

    const handleDelete = (index) => {
        setJobs((prev) => {
            const newJobs = prev.filter((_, i) => i !== index);
            localStorage.setItem("jobs", JSON.stringify(newJobs));
            return newJobs;
        })
    }

    return (
        <div className="container">
            <h1>To Do List</h1>
            <input
                className="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleAdd}>
                Add
            </button>
            <h1>List</h1>
            <ol className="list-none">
                {jobs.map((job, index) => (
                    <li className="flex my-2" key={index}>
                        <div className="ms-2 me-auto">
                            {job}
                        </div>
                        <button className="badge text-bg-danger rounded-pill"
                                onClick={() => handleDelete(index)}>Delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default App;
