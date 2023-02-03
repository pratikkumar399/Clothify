import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';
const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {/* mapping the categories dynamically do that the components becomes reusable*/}
            {categories.map((category) => (
                <CategoryItem kay={category.id} category={category} />
            ))}
        </div>
    )
}

export default Directory