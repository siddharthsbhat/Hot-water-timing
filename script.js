$(document).ready(function () {
    // Set default values for the textboxes based on the selected fixture
    $('#fixture').change(function () {
        const fixture = $('#fixture').val();
        if (fixture === 'Shower') {
            $('#flow').val(2.5);
        } else if (fixture === 'Lavatory') {
            $('#flow').val(0.5);
        } else if (fixture === 'Mopsink') {
            $('#flow').val(2.3);
        } else if (fixture === 'Sink') {
            $('#flow').val(1.5);
        } else if (fixture === 'Other') {
            $('#flow').val(0.0);
        }
    });

    // Calculate Timing when the button is clicked
    $('#calculateBtn').click(function () {
        const flow = $('#flow').val();
        const length = parseFloat($('#length').val());
        const diameter = parseFloat($('#diameter').val());

        // Calculate Timing based on your requirements
        const timinginMinutes = calculateTiming(flow, length, diameter);
        const timinginSeconds = timinginMinutes * 60;

        // Display the result in the Timing Output field
        $('#timingOutputMinutes').val(timinginMinutes);
        $('#timingOutputSeconds').val(timinginSeconds);
    });

    // Function to calculate timing
    function calculateTiming(flow, length, diameter) {
        // Implement your timing calculation logic here
        // For example, you can add the values:
        const K = 0.04;
        var calculatedValue; // Time in Minutes
        const diameterSquare = diameter * diameter;

        calculatedValue = (K * diameterSquare * length) / flow;

        return calculatedValue;
    }
});
