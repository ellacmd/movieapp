import './RecommendedSection.css'
import RecommendedMovie from './RecommendedMovie';
const RecommendedSection = ({ recommendedMoviesData }) => {
  return (
    <div className='recommended'>
      <h1>Recommended for you</h1>

      <ul className='recommended-container'>
        {recommendedMoviesData.map((movie, i) => (
          <RecommendedMovie movie={movie} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default RecommendedSection;
