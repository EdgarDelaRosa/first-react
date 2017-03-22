import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({allAuthors, course, errors, onSave, onChange}) => {
  return (
    <div>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title} />
      <SelectInput
        name="authorId"
        label="Author"
        update={onChange}
        defaultOption="Select Author"
        value={course.authorId}
        options={allAuthors} />
      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category} />
      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length} />
      <input
        type="submit"
        onClick={onSave}
        className="btn btn-primary"/>
    </div>

  );
};

CourseForm.propTypes = {
  allAuthors: PropTypes.arrayOf(PropTypes.object),
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CourseForm;
