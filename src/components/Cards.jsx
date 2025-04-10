import { useEffect, useState } from "react";
import Card from "./Card/Card"

export default function Cards() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://hr.mediusware.xyz/api/website/blogs/')
          .then(response => response.json())
          .then(data => setItems(data.results))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    return (
        <div className="container grid grid-cols-3 gap-4 mb-10">
            {items?.map(item => <Card key={item.id} item={item} />)}
        </div>
    );
  }
  