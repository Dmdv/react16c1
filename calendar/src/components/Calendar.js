import '../css/main.css'
import PropTypes from 'prop-types'

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

const CurrentDayHeader = () => {
    return <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">Среда</div>
        <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">8</div>
            <div className="ui-datepicker-material-month">Марта</div>
            <div className="ui-datepicker-material-year">2017</div>
        </div>
    </div>;
}

const Calendar = ({props}) => {

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
            <CurrentDayHeader/>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">Март</span>&nbsp;<span
                    className="ui-datepicker-year">2017</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col className="ui-datepicker-week-end"/>
                    <col className="ui-datepicker-week-end"/>
                </colgroup>
                <WeekDays days={days}/>
                <tbody>
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
                </tbody>
            </table>
        </div>
    )
};

export default Calendar;

