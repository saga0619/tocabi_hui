var ros = new ROSLIB.Ros({
    url: 'ws://172.17.218.128:9090'
});

ros.on('connection', function() {
    console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
    console.log('Connection to websocket server closed.');
});

// Publishing a Topic
// ------------------

var talker = new ROSLIB.Topic({
    ros: ros,
    name: '/talker',
    messageType: 'std_msgs/String'
});

function button1_click() {
    var string_ = new ROSLIB.Message({
        data: "Hello World"
    });
    talker.publish(string_);
}

var taskCommander = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/taskcommand',
    messageType: 'tocabi_msgs/TaskCommand'
});

function taskCommand() {
    var tc_ = new ROSLIB.Message({
        ratio: parseFloat(document.getElementById("composeinput").value),
        height: parseFloat(document.getElementById("heightinput").value),
        pelv_pitch: 0.0,
        roll: 0.0,
        pitch: 0.0,
        yaw: 0.0,
        solver: 0,
        contactredis: 0,
        maintain_lc: false,
        left: false,
        right: false,
        left_foot: false,
        right_foot: false,
        left_hand: false,
        right_hand: false,
        time: parseFloat(document.getElementById("trajinput").value),
        mode: parseInt(document.getElementById("modesel").value),
        l_x: 0.0,
        l_y: 0.0,
        l_z: 0.0,
        l_roll: 0.0,
        l_pitch: 0.0,
        l_yaw: 0.0,
        r_x: 0.0,
        r_y: 0.0,
        r_z: 0.0,
        r_roll: 0.0,
        r_pitch: 0.0,
        r_yaw: 0.0,
        walking_enable: 0,
        pattern: 0,
        pattern2: 0,
        comcontrol: 0,
        ik_mode: 0,
        dob: false,
        imu: false,
        mom: false,
        first_foot_step: 0,
        x: 0.0,
        y: 0.0,
        z: 0.0,
        walking_height: 0.0,
        theta: 0.0,
        step_length_x: 0.0,
        step_length_y: 0.0,
        customTaskGain: false,
        acc_p: 0.0,
        pos_p: 0.0,
        pos_d: 0.0,
        ang_p: 0.0,
        ang_d: 0.0,
    });
    taskCommander.publish(tc_);
}






var com_pub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/command',
    messageType: 'std_msgs/String'
});
var start_pub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/starter',
    messageType: 'std_msgs/String'
});
var stop_pub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/stopper',
    messageType: 'std_msgs/String'
});

var str_init = new ROSLIB.Message({
    data: "HELLO TO COMMAND"
});

com_pub.publish(str_init);

function tocabi_commander(com_msg) {
    var com_str = new ROSLIB.Message({
        data: com_msg
    });
    com_pub.publish(com_str);
}

function tocabi_starter() {
    var com_str = new ROSLIB.Message({
        data: "start_tocabi"
    });
    start_pub.publish(com_str);
}

function tocabi_stopper() {
    var com_str = new ROSLIB.Message({
        data: "stop_tocabi"
    });
    stop_pub.publish(com_str);
}

var p1_progress = 0.0;

// Subscribing to a Topic
// ----------------------
var syslog_sub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/syslog',
    messageType: 'std_msgs/String'
});

syslog_sub.subscribe(function(message) {
    let lbox = document.getElementById('syslog_box');
    let tline = document.createTextNode(message.data);
    lbox.appendChild(tline);
    var vr = document.createElement("br");
    lbox.appendChild(vr);
    lbox.scrollTop = lbox.scrollHeight;
})

var time_sub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/time',
    messageType: 'std_msgs/Float32',
    throttle_rate: 50,
    queue_size: 0
});

time_sub.subscribe(function(message) {
    let t_text = document.getElementsByClassName("mdl-layout-title")[2];
    t_text.innerText = message.data.toFixed(4);
})

var com_status_sub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/comstates',
    messageType: 'std_msgs/Float32MultiArray',
    throttle_rate: 50,
    queue_size: 0

});

com_status_sub.subscribe(function(message) {
    p1_progress = message.data[14] * 100.0;
    document.querySelector('#p1').MaterialProgress.setProgress(p1_progress);
    // document.querySelector('#p1').addEventListener('mdl-componentupgraded', function() {
    //         this.MaterialProgress.setProgress(p1_progress);
    //     })
    // console.log(message.data[14]);
    // document.getElementById("p1").setProgress(message.data[14] * 100.0)
})

var listener = new ROSLIB.Topic({
    ros: ros,
    name: '/listener',
    messageType: 'std_msgs/String'
});

listener.subscribe(function(message) {
    console.log('Received message on ' + listener.name + ': ' + message.data);
});