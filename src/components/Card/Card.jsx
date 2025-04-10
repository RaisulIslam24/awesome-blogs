import './Card.css'

export default function Card({ item }) {
    return (
      <div className="container">
        <div className="card">
            <img className='blogImg' src={item.image} alt="image" />
            <div className="intro">
                <h1 className='title'>{item.title}</h1>
            </div>
        </div>
      </div>
    );
  }
  