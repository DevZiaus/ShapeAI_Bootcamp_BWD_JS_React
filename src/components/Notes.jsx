import React from "react";

function Notes() {
  const currYear = new Date().getFullYear();

  return (
    <div class="note">
      <h1>Javascript and React JS</h1>
      <p>
        This was an amazing bootcamp taken up by Shaurya Sinha. WE covered
        everything from the scratch including HTML, Javascript and React JS. It
        started on 25th of may 2021 and ended in 31st may 2021.
      </p>
    </div>
  );
}

export default Notes;
