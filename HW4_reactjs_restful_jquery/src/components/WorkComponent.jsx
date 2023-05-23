import '../style.css';
import React from 'react';


function WorkComponent({date, title, details}) {
  const styles = {
    main: {
      paddingBottom: "30px"
    },
  };

  return (
    <div class="col-lg-4" style={styles.main}>
      <div class="box">
        <span>{date}</span>
        <h4>{title}</h4>
        <p>
          {details}
        </p>
      </div>
    </div>
  );
}

export default WorkComponent;
