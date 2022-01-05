var ros = new ROSLIB.Ros({
    url: 'ws://192.168.0.11:9090'
});

ros.on('connection', function () {
    console.log('Connected to websocket server.');
});

ros.on('error', function (error) {
    console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function () {
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

function taskCommand12() {
    var tc_ = new ROSLIB.Message({
        ratio: 0.5,
        height: 0.0,
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
        time: 1.0,
        mode: 12,
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

function taskCommand13() {
    var tc_ = new ROSLIB.Message({
        ratio: 0.5,
        height: 0.0,
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
        time: 1.0,
        mode: 13,
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
        mode: parseInt(select.value),
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
var avatarcommand_pub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/avatar/pose_calibration_flag',
    messageType: 'std_msgs/Int8'
})

var avatarmode_pub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/avatar/upperbodymodecommand',
    messageType: 'std_msgs/Int8'
})

var jointcom_pub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/positioncommand',
    messageType: 'tocabi_msgs/positionCommand'
});

var p_order = [15, 16, 17, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30, 31, 32, 12, 13, 14, 23, 24, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var p_order2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 16, 17, 18, 0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 8, 9, 10, 11, 12, 13, 14, 15];

function settoPos0() {

    var pos1 = [0.0, 0.0, -0.24, 0.6, -0.36, 0.0,
        0.0, 0.0, -0.24, 0.6, -0.36, 0.0,
        0, 0, 0,
        0.3, 0.3, 1.5, -1.27, -1, 0, -1, 0,
        0, 0,
        -0.3, -0.3, -1.5, 1.27, 1, 0, 1, 0];



    for (let i = 0; i < jtfd.length; i++) {
        jtfd[i].value = pos1[p_order[i]];
    }
}


function positionCommand() {
    const left_hand = 15;
    const right_hand = 25;

    const left_foot = 0;
    const right_foot = 6;

    const waist = 12;
    const head = 23;


    var p_arr = [];


    for (let i = 0; i < jtfd.length; i++) {
        p_arr.push(parseFloat(jtfd[p_order2[i]].value));
    }

    var pc_msg = new ROSLIB.Message({
        position: p_arr,
        traj_time: 3.0,
        gravity: false,
        relative: false,

    });

    jointcom_pub.publish(pc_msg);
}


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



function avatar_commander(avatar_mode) {
    var av_msg = new ROSLIB.Message({
        data: avatar_mode
    })
    avatarcommand_pub.publish(av_msg);
}

function avatarmode_commander() {
    var av_msg = new ROSLIB.Message({
        data: parseInt(select2.value)
    })
    avatarmode_pub.publish(av_msg);
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

syslog_sub.subscribe(function (message) {
    let lbox = document.getElementById('syslog_box');
    let tline = document.createTextNode(message.data);
    lbox.appendChild(tline);
    var vr = document.createElement("br");
    lbox.appendChild(vr);
    lbox.scrollTop = lbox.scrollHeight;
});

var sysstatate_sub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/systemstate',
    messageType: 'std_msgs/Int8MultiArray'
});

sysstatate_sub.subscribe(function(message){
    message.data[0]; //imu
    message.data[1]; //ecat1
    message.data[2];//ft
    message.data[3]; //ecat2
    message.data[4]; //se
    message.data[5]; //tc

    var e1 = document.querySelector('.e1_status');
    var e2 = document.querySelector('.e2_status');
    var e2 = document.querySelector('.e2_status');

    if(message.data[1]==0)
    {

    }
    else if(message.data[1]==1)
    {

    }
    else if(message.data[1] ==2)
    {

    }


})

var time_sub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/time',
    messageType: 'std_msgs/Float32',
    throttle_rate: 50,
    queue_size: 0
});

time_sub.subscribe(function (message) {
    let t_text = document.getElementById('system-time');
    t_text.innerText = message.data.toFixed(4);
})

var com_status_sub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/comstates',
    messageType: 'std_msgs/Float32MultiArray',
    throttle_rate: 50,
    queue_size: 0

});

com_status_sub.subscribe(function (message) {

    comsf = document.querySelectorAll('#comstatus')

    comsf[0] = message.data[0];
    comsf[1] = message.data[1];
    comsf[2] = message.data[2];
    comsf[3] = message.data[3];
    comsf[4] = parseInt(message.data[4]);
    comsf[5] = parseInt(message.data[10]);
    comsf[6] = parseInt(message.data[11]);

    comsf[7] = message.data[5];
    comsf[8] = message.data[6];
    comsf[9] = message.data[7];
    comsf[10] = message.data[8];
    comsf[11] = parseInt(message.data[9]);
    comsf[12] = parseInt(message.data[12]);
    comsf[13] = parseInt(message.data[13]);

    // p1_progress = message.data[14] * 100.0;
    linprog.progress = message.data[14];

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

listener.subscribe(function (message) {
    console.log('Received message on ' + listener.name + ': ' + message.data);
});
