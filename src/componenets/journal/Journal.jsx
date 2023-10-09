const Journal = () => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mb-5">
        <figure className="min-w-[400px]">
          <img
            src="https://i.ibb.co/vvZLgm9/image-2.jpg"
            alt="Movie"
            
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Unlocking the Secrets of a Good Night's Sleep: The Science of Restorative Slumber</h2>
          <p>Dive into the latest research and expert insights on the importance of quality sleep for overall health. Learn practical tips and strategies to improve your sleep patterns and wake up feeling refreshed and energized.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl mb-5">
        <figure className="min-w-[400px]">
          <img
            src="https://i.ibb.co/80XZKgn/image-3.jpg"
            alt="Movie"
            
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Mindful Eating: How Your Food Choices Impact Your Well-being</h2>
          <p>Explore the connection between nutrition, mindfulness, and mental health. Discover the benefits of mindful eating practices and how they can help you make healthier food choices, reduce stress, and enhance your overall sense of well-being.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl mb-5">
        <figure className="min-w-[400px]">
          <img
            src="https://i.ibb.co/SJWzjmz/h3.png"
            alt="Movie"
            
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">The Power of Physical Activity: A Comprehensive Guide to Exercise and Health</h2>
          <p>Get the lowdown on the numerous physical and mental health benefits of regular exercise. This article provides a comprehensive overview of different types of workouts, their impact on your body, and tips to establish a sustainable fitness routine.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
