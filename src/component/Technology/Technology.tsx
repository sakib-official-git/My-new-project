import { use } from 'react';
import type { Itech } from '../../type/techType';

interface TechProps{
    techPromise:Promise<Itech[]>
}


const Technology = ({techPromise}:TechProps) => {
    console.log(techPromise);
    const tech = use(techPromise);
    console.log(tech,"tech");
    return (
        <div>
            <div className="technology-grid">
  {tech.map((item) => (
    <div className="technology-card" key={item.id}>
      <div className="card-top">
        <img src={item.icon} alt={item.name} />

        <span className="badge">{item.badge}</span>
      </div>

      <h2>{item.name}</h2>

      <p className="description">{item.description}</p>

      <div className="card-info">
        <span className="category">{item.category}</span>

        <span className="difficulty">{item.difficulty}</span>

        <span className="rating">⭐ {item.rating}</span>
      </div>

      <button>Add to Stack</button>
    </div>
  ))}
</div>
            
        </div>
    );
};

export default Technology;