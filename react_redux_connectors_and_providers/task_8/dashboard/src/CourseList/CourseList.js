import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getCourseList } from '../selectors/courseSelector';

function CourseList({ isLoggedIn, listCourses, fetchCourses, selectCourse, unSelectCourse }) {
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    const onChangeRow = (id, checked) => {
        if (checked) {
            selectCourse(id);
        } else {
            unSelectCourse(id);
        }
    };

    return (
        <table className={css(styles.CourseList)} id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses && listCourses.length > 0 ? (
                    listCourses.map((course) => (
                        <CourseListRow
                            key={course.id}
                            textFirstCell={course.name}
                            textSecondCell={course.credit.toString()}
                            isChecked={course.isSelected}
                            onChangeRow={() => onChangeRow(course.id, !course.isSelected)}
                        />
                    ))
                ) : (
                    <CourseListRow textFirstCell="No course available yet" />
                )}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    listCourses: PropTypes.arrayOf(CourseShape),
    fetchCourses: PropTypes.func.isRequired,
    selectCourse: PropTypes.func.isRequired,
    unSelectCourse: PropTypes.func.isRequired,
};

CourseList.defaultProps = {
    listCourses: [],
};

const styles = StyleSheet.create({
    CourseList: {
        border: "1px solid lightgray",
        fontSize: "large",
        margin: "0 auto",
        width: "90%",
        marginTop: "20px",
    },
});

const mapStateToProps = (state) => ({
    listCourses: getCourseList(state).toJS(),
});

const mapDispatchToProps = {
    fetchCourses,
    selectCourse,
    unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);