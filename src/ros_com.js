console.log("loading roscom");

var ros = new ROSLIB.Ros({
    url: 'ws://192.168.20.28:9090'
});

ros.on('connection', function () {
    console.log('Connected to websocket server.');


    var ros_status = document.querySelector('.ros_status');

    ros_status.innerText = 'done';
    ros_status.style.color =  "#5EFF00";     

});

ros.on('error', function (error) {
    console.log('error websocket server.');

    var ros_status = document.querySelector('.ros_status');

    ros_status.innerText = 'clear';
    ros_status.style.color =  "#ff0000"; 

});

ros.on('close', function () {
    console.log('closed to websocket server.');

    var ros_status = document.querySelector('.ros_status');



    ros_status.innerText = 'change_history';
    ros_status.style.color = "#FF0000"; //yellow

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



var mobileCommander = new ROSLIB.Topic({
    ros: ros,
    name: '/joy',
    messageType: 'sensor_msgs/Joy'
})

function mobileCommand(joy_x, joy_y, joy_z)
{
    console.log(joy_x, joy_y, joy_z);
    var m_cmd = new ROSLIB.Message({
        axes: [joy_x, joy_y, joy_z],
        buttons: [],
    });
    mobileCommander.publish(m_cmd);
    
}

var mobileModeCommander = new ROSLIB.Topic({
    ros: ros,
    name: '/drive_mode',
    messageType: 'std_msgs/Int16'
})

function mobileModeCommand(mode)
{
    modec = document.querySelector('.currentMode');

    if(mode == 0)
    {
        modec.innerText = "N";
    }
    else if(mode == 1)
    {
        modec.innerText = "D";
    }
    else if(mode == -1)
    {
        modec.innerText = "R";
    }
    
    console.log(mode);

    var mm_ = new ROSLIB.Message({
        data: mode
    })

    mobileModeCommander.publish(mm_);
}



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

var est_order = [0,1,2,3,4,5,9,10,11,12,13,14,6,7,8,17,18,19,20,21,22,23,24,15,16,25,26,27,28,29,30,31,32];

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
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}



var intervalId = window.setInterval(function(){

    ros.getNodes(function(nodes){
        // console.log(nodes);
        node_boxes = document.querySelectorAll('.tocabi-launch-status');

        tocabi_launch_exist = false;
        tocabi_controller_exist = false;
        mobile_launch_exist = false;
        mobile_controller_exist = false;
        hand_launch_exist = false;
        hand_controller_exist = false;

        for (let i=0; i<nodes.length;i++)
        {

            if(nodes[i] == "/mobile_launch_manager")
            {
                // console.log("mobile launch exist");
                mobile_launch_exist = true;


            }
            else if(nodes[i] == "/tocabi_launch_manager")
            {
                // console.log("tocabi_ launch exist");
                tocabi_launch_exist = true;

            }
            else if(nodes[i] == "/tocabi_controller")
            {
                tocabi_controller_exist = true;
            }
            else if(nodes[i] == "/tm_listener")
            {
                mobile_controller_exist = true;
            }            
            else if(nodes[i] == "/hand_launch_manager")
            {
                hand_launch_exist = true;
            }            
            else if(nodes[i] == "/right_hand")
            {
                hand_controller_exist = true;
            }

        }


        if(tocabi_launch_exist)
        {
            node_boxes[0].innerText = "Online";
            node_boxes[0].style.backgroundColor = "#5EFF00";
        }
        else{
            node_boxes[0].innerText = "Offline";
            node_boxes[0].style.backgroundColor = "#ff0000";
        }

        if(tocabi_controller_exist)
        {
            node_boxes[1].innerText = "Online";
            node_boxes[1].style.backgroundColor = "#5EFF00";
        }
        else{
            node_boxes[1].innerText = "Offline";
            node_boxes[1].style.backgroundColor = "#ff0000";
        }


        if(mobile_launch_exist)
        {
            node_boxes[4].innerText = "Online";
            node_boxes[4].style.backgroundColor = "#5EFF00";
        }
        else{
            node_boxes[4].innerText = "Offline";
            node_boxes[4].style.backgroundColor = "#ff0000";
        }


        if(mobile_controller_exist)
        {
            node_boxes[5].innerText = "Online";
            node_boxes[5].style.backgroundColor = "#5EFF00";
        }
        else{
            node_boxes[5].innerText = "Offline";
            node_boxes[5].style.backgroundColor = "#ff0000";
        }


        if(hand_launch_exist)
        {
            node_boxes[2].innerText = "Online";
            node_boxes[2].style.backgroundColor = "#5EFF00";
        }
        else{
            node_boxes[2].innerText = "Offline";
            node_boxes[2].style.backgroundColor = "#ff0000";
        }


        if(hand_controller_exist)
        {
            node_boxes[3].innerText = "Online";
            node_boxes[3].style.backgroundColor = "#5EFF00";
        }
        else{
            node_boxes[3].innerText = "Offline";
            node_boxes[3].style.backgroundColor = "#ff0000";
        }

    })

},1000)


async function check_node_exist(){

    while(true)
    {
        sleep(1000);
        // console.log("1");

        ros.getNodes(function(nodes){
            console.log(nodes);
        })
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
function avatarmode_commander_btn(mode) {
    var av_msg = new ROSLIB.Message({
        data: parseInt(mode)
    })
    avatarmode_pub.publish(av_msg);
}

function avatarmode_commander() {
    var av_msg = new ROSLIB.Message({
        data: parseInt(select2.value)
    })
    avatarmode_pub.publish(av_msg);
}

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

function tocabi_starter() {
    var com_str = new ROSLIB.Message({
        data: "start_tocabi"
    });
    start_pub.publish(com_str);
}

function tocabi_restarter() {
    var com_str = new ROSLIB.Message({
        data: "restart_websocket"
    });
    start_pub.publish(com_str);
}

function tocabi_stopper() {
    var com_str = new ROSLIB.Message({
        data: "stop_tocabi"
    });
    stop_pub.publish(com_str);
}


var start_pub2 = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi_mobile/starter',
    messageType: 'std_msgs/String'
});
var stop_pub2 = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi_mobile/stopper',
    messageType: 'std_msgs/String'
});
function mobile_starter() {
    var com_str = new ROSLIB.Message({
        data: "start_mobile"
    });
    start_pub2.publish(com_str);
}
function mobile_stopper() {
    var com_str = new ROSLIB.Message({
        data: "stop_mobile"
    });
    stop_pub2.publish(com_str);
}


var start_pub3 = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi_vision/starter',
    messageType: 'std_msgs/String'
});
var stop_pub3 = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi_vision/stopper',
    messageType: 'std_msgs/String'
});
function hand_starter() {
    var com_str = new ROSLIB.Message({
        data: "start"
    });
    start_pub3.publish(com_str);
}
function hand_stopper() {
    var com_str = new ROSLIB.Message({
        data: "stop"
    });
    stop_pub3.publish(com_str);
}


var p1_progress = 0.0;

// Subscribing to a Topic
// ----------------------
var syslog_sub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/syslog',
    messageType: 'std_msgs/String'
});


// var start_sub = new ROSLIB.Topic({
//     ros: ros,
//     name: '/tocabi/starter',
//     messageType: 'std_msgs/String'
// });
// var stop_sub = new ROSLIB.Topic({
//     ros: ros,
//     name: '/tocabi/stopper',
//     messageType: 'std_msgs/String'
// });

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

sysstatate_sub.subscribe(function (message) {
    message.data[0]; //imu
    message.data[1]; //ecat1
    message.data[2];//ft
    message.data[3]; //ecat2
    message.data[4]; //se
    message.data[5]; //tc

    var ses = document.querySelector('.se_status');
    var e1 = document.querySelector('.e1_status');
    var e2 = document.querySelector('.e2_status');
    var tcs = document.querySelector('.tc_status');

    //refresh done clear change_history

    if (message.data[1] == 0) {
        e1.innerText = 'clear';
        e1.style.color = "#FF0000"; //red
    }
    else if (message.data[1] == 1) {
        e1.innerText = 'change_history';
        e1.style.color = "#dcf30c"; //yellow

    }
    else if (message.data[1] == 2) {
        e1.innerText = 'done';
        e1.style.color = "#5EFF00"; //green
    }


    if (message.data[3] == 0) {
        e2.innerText = 'clear';
        e2.style.color = "#FF0000"; //green
    }
    else if (message.data[3] == 1) {
        e2.innerText = 'change_history';
        e2.style.color = "#dcf30c"; //green

    }
    else if (message.data[3] == 2) {
        e2.innerText = 'done';
        e2.style.color = "#5EFF00"; //green
    }

    if (message.data[4] == 1)
    {
        ses.innerText = 'done';
        ses.style.color = "#5EFF00"; //green
    }
    else if(message.data[4] == 0)
    {
        ses.innerText = 'clear';
        ses.style.color = "#FF0000"; //red
    }

    if(message.data[5] == 0)
    {
        tcs.innerText = 'done';
        tcs.style.color = "#5EFF00";
    }
    else if(message.data[5] == 1)
    {
        tcs.innerText = 'clear';
        tcs.style.color = "#FF0000";
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

var ecat_status_sub = new ROSLIB.Topic({
    ros: ros,
    name: '/tocabi/ecatstates',
    messageType: 'std_msgs/Int8MultiArray',
    throttle_rate: 50,
    queue_size: 0

});

// stop_sub.subscribe(function (message) {
//     console.log('stopper_rcv : ' + message.data)
// });

// start_sub.subscribe(function (message) {
//     console.log('starter_rcv : ' + message.data)
// });

ecat_status_sub.subscribe(function (message) {
    safety = document.querySelectorAll('.tocabi-joint-safety-status')
    zp = document.querySelectorAll('.tocabi-joint-zp-status')
    ecat = document.querySelectorAll('.tocabi-joint-ecat-status')

    // console.log(safety.length);
    // console.log(zp.length);
    // console.log(ecat.length);

    // console.log('Received message : ' + message.data);

    for (let i = 0; i < ecat.length; i++) {

        zp[est_order[i]].innerText = i;

        num_ecat = message.data[i];

        num_safety = message.data[66+i];
        
        num_zp = message.data[33+i];

        if (num_ecat == 0) {
            ecat[est_order[i]].innerText = "0";
            ecat[est_order[i]].style.backgroundColor="#FFFF00";
            ecat[est_order[i]].style.color="#000000";
        }
        else if (num_ecat == 1) {
            ecat[est_order[i]].innerText = "1";
            ecat[est_order[i]].style.backgroundColor="#5EFF00";
            ecat[est_order[i]].style.color="#000000";
        }
        else if (num_ecat == 2) {
            ecat[est_order[i]].innerText = "2";
            ecat[est_order[i]].style.backgroundColor="#FFA500";
            ecat[est_order[i]].style.color="#FFFFFF";
        }
        else if (num_ecat == 3) {
            ecat[est_order[i]].innerText = "3";
            ecat[est_order[i]].style.backgroundColor="#FF0000";
            ecat[est_order[i]].style.color="#000000";
        }
        else if (num_ecat == 4) {
            ecat[est_order[i]].innerText = "4";
            ecat[est_order[i]].style.backgroundColor="#5EFF00";
            ecat[est_order[i]].style.color="#000000";
        }

        if( num_safety == 0)
        {
            safety[est_order[i]].innerText="OK";
            safety[est_order[i]].style.backgroundColor="#5EFF00"; //green
            safety[est_order[i]].style.color="#000000"; //black

        }
        else if(num_safety == 1)
        {
            safety[est_order[i]].innerText="JL";
            safety[est_order[i]].style.backgroundColor="#FF0000";
            safety[est_order[i]].style.color="#ffffff"; //white
            
        }
        else if(num_safety == 2)
        {
            safety[est_order[i]].innerText="VL";
            safety[est_order[i]].style.backgroundColor="#FF0000";
            safety[est_order[i]].style.color="#ffffff"; 
            
        }
        else if(num_safety == 3)
        {
            safety[est_order[i]].innerText="TL";
            safety[est_order[i]].style.backgroundColor="#FF0000";
            safety[est_order[i]].style.color="#ffffff"; 
            
        }
        else if(num_safety == 4)
        {
            safety[est_order[i]].innerText="CL";
            safety[est_order[i]].style.backgroundColor="#FF0000";
            safety[est_order[i]].style.color="#ffffff"; 
            
        }
        else if(num_safety == 6)
        {
            safety[est_order[i]].innerText="NT";
            safety[est_order[i]].style.backgroundColor="#000000";
            safety[est_order[i]].style.color="#ffffff";
            
        }
        else if(num_safety == 7)
        {
            safety[est_order[i]].innerText="LL";
            safety[est_order[i]].style.backgroundColor="#F97613"; //orange
            safety[est_order[i]].style.color="#000000";

            
        }
        else if(num_safety == 9)
        {
            safety[est_order[i]].innerText="NOS";
            safety[est_order[i]].style.backgroundColor="#808080";
            safety[est_order[i]].style.color="#ffffff"; 
        }

        if(num_zp ==0)
        {
            zp[est_order[i]].innerText="zp";
            zp[est_order[i]].style.backgroundColor="#FFFF00";
            zp[est_order[i]].style.color="#000000";
        }
        else if(num_zp ==1)
        {
            zp[est_order[i]].innerText="sc";
            zp[est_order[i]].style.backgroundColor="#FFFF00";
            zp[est_order[i]].style.color="#000000";
            
        }
        else if(num_zp ==2)
        {
            zp[est_order[i]].innerText="man";
            zp[est_order[i]].style.backgroundColor="#F97613";
            zp[est_order[i]].style.color="#000000";
            
        }
        else if(num_zp ==3)
        {
            zp[est_order[i]].innerText="length";
            zp[est_order[i]].style.backgroundColor="#FF0000";
            zp[est_order[i]].style.color="#FFFFFF";
            
        }
        else if(num_zp ==4)
        {
            zp[est_order[i]].innerText="go0";
            zp[est_order[i]].style.backgroundColor="#FFFF00";
            zp[est_order[i]].style.color="#000000";
            
        }
        else if(num_zp ==5)
        {
            
            zp[est_order[i]].innerText="ok";
            zp[est_order[i]].style.backgroundColor="#5EFF00";
            zp[est_order[i]].style.color="#000000";
        }

    }


});

com_status_sub.subscribe(function (message) {

    // console.log("hello")
    comsf = document.querySelectorAll('#ecat-status-val')

    comsf[0].innerText = message.data[0].toFixed(3);
    comsf[1].innerText = message.data[1].toFixed(3);
    comsf[2].innerText = message.data[2].toFixed(3);
    comsf[3].innerText = message.data[3].toFixed(3);
    comsf[4].innerText = parseInt(message.data[4]);
    comsf[5].innerText = parseInt(message.data[10]);
    comsf[6].innerText = parseInt(message.data[12]);

    comsf[7].innerText = message.data[5].toFixed(3);
    comsf[8].innerText = message.data[6].toFixed(3);
    comsf[9].innerText = message.data[7].toFixed(3);
    comsf[10].innerText = message.data[8].toFixed(3);
    comsf[11].innerText = parseInt(message.data[9]);
    comsf[12].innerText = parseInt(message.data[11]);
    comsf[13].innerText = parseInt(message.data[13]);

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


console.log("loading roscom complete");



// check_node_exist()