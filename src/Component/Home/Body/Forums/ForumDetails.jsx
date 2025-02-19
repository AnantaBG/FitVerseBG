import { Button, Card } from "flowbite-react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
const ForumDetails = () => {
    const forums = useLoaderData();
    const {_id, username, title, postData} = forums;
    return (
        <div className="my-20">
            <h2 className="text-3xl my-5 text-center font-bold font-mono uppercase">{title} Details</h2>
            <Helmet>
                <title>{title}</title>
      </Helmet>

<div className="mx-auto flex justify-center">
    <Card
      className="max-w-md"
    >
      <h5 className="text-2xl font-mono font-bold tracking-tight text-gray-900 dark:text-white">User, 
        {username}
      </h5>
      
    <p className="font-normal flex flex-col text-gray-600 dark:text-gray-400"><span className="text-3xl font-mono font-bold">
    {title}
    </span>
        
    </p>
    <p className="font-normal flex flex-col text-gray-700 dark:text-gray-400"><span className="text-2xl font-mono font-bold">Experience:</span>
        {postData}
    </p>
    </Card>
            
    </div>

        </div>
    );
};

export default ForumDetails;