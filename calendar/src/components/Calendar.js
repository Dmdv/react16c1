import '../css/main.css'
import PropTypes from 'prop-types'
import moment from "moment";

const WeekDays = ({days}) => {
    return <thead>
    <tr>
        {
            days.map((day) =>
                <th scope="col" title={day[0]}>
                    {day[1]}
                </th>
            )}
    </tr>
    </thead>;
}

WeekDays.propTypes = {
    days: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

const CurrentDayHeader = ({currentDate}) => {

    const {weekday, day, month, year} = currentDate;

    return <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{weekday}</div>
        <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{day}</div>
            <div className="ui-datepicker-material-month">{month}</div>
            <div className="ui-datepicker-material-year">{year}</div>
        </div>
    </div>;
}

CurrentDayHeader.propTypes = {
    currentDate: PropTypes.shape({
        weekday: PropTypes.string,
        day: PropTypes.string,
        month: PropTypes.string,
        year: PropTypes.string
    })
}

const DatePickerHeader = () => {
    return <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">Март</span>&nbsp;<span
            className="ui-datepicker-year">2017</span>
        </div>
    </div>;
}

// TODO: Add an array of dates with a mark that a day from the other month and which day is today

const DatesGrid = () => {
    return <tbody>
    <tr>
        <td className="ui-datepicker-other-month">27</td>
        <td className="ui-datepicker-other-month">28</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
    </tr>
    <tr>
        <td>6</td>
        <td>7</td>
        <td className="ui-datepicker-today">8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
    </tr>
    {/*ddd+*/}
    </tbody>;
}

const Columns = () => {
    return <colgroup>
        <col/>
        <col/>
        <col/>
        <col/>
        <col/>
        <col className="ui-datepicker-week-end"/>
        <col className="ui-datepicker-week-end"/>
    </colgroup>;
}

const Calendar = () => {

    const [weekday, month, year, day] = moment().format('dddd MMMM YYYY DD').split(' ');

    const currentDate = {
        weekday: weekday,
        day: day,
        month: month,
        year: year
    }

    const days = [
        ['Понедельник', 'Пн'],
        ['Вторник', 'Вт'],
        ['Среда', 'Ср'],
        ['Четверг', 'Чтв'],
        ['Пятница', 'Птн'],
        ['Суббота', 'Сб'],
        ['Воскресенье', 'Вс']
    ];

    return (
        <div className="ui-datepicker">
            <CurrentDayHeader currentDate={currentDate}/>
            <DatePickerHeader/>
            <table className="ui-datepicker-calendar">
                <Columns/>
                <WeekDays days={days}/>
                <DatesGrid/>
            </table>
        </div>
    )
};

export default Calendar;

