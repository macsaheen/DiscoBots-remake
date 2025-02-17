$(document).ready(function () {
    $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true,
        todayBtn: "linked",
        title: "Select a Date"
    }).on("changeDate", function (e) {
        let selectedDate = e.format(); // Get the selected date
        updateTimeSlots(selectedDate);
    });

    function updateTimeSlots(date) {
        let timeSlots = [
            "09:00 - 11:00",
            "11:00 - 13:00",
            "13:00 - 15:00",
            "17:00 - 19:00",
            "19:00 - 21:00"
        ];

        let timeDropdown = $("#time-options");
        timeDropdown.empty(); // Clear previous options
        timeDropdown.append('<option value="">-- Select a Time Slot --</option>');

        timeSlots.forEach(slot => {
            timeDropdown.append(`<option value="${slot}">${slot}</option>`);
        });

        $("#time-selection").fadeIn(); // Show the time selection dropdown
    }

    // Show form when a time is selected
    $("#time-options").on("change", function () {
        if ($(this).val()) {
            $("#appointment-form").fadeIn();
        } else {
            $("#appointment-form").fadeOut();
        }
    });

    // Handle form submission
    $("#booking-form").on("submit", function (e) {
        e.preventDefault();

        let appointmentData = {
            date: $("#datepicker input").val(),
            time: $("#time-options").val(),
            childName: $("#child-name").val(),
            parentName: $("#parent-name").val(),
            phone: $("#phone-number").val(),
            notes: $("#notes").val()
        };

        // Store data in session storage
        sessionStorage.setItem("appointmentData", JSON.stringify(appointmentData));

        // Redirect to confirmation page
        window.location.href = "confirm.html";
    });
});
