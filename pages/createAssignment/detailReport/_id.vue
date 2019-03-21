<template>
  <b-row>
    <b-col lg="12">
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                    <b-col>
                        <b-row style="padding: 2px">
                            <b-col cols="4"><strong> ID</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="4"><strong>Assignment Class</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="4"><strong>Assignment Title</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
        </div>
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                    <b-col>
                        <b-row style="padding: 2px"><strong>System Status</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Assignment Type</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <!-- <b-row style="padding: 2px">
                            <b-col sm="4">Project Number</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">IO Number</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row> -->
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px"><strong>Time record</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Working Date</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Start</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Arrived at location</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Job Finish</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">End</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row style="width: 100%; margin-left: auto; margin-right: auto; padding-top: 4px">
                    <b-col>
                        <b-row style="padding: 2px"><strong>Customer Information</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Company</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Address</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Contact Person</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">PIC Onsite</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px"><br></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4"><strong>SPPD Status</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding-top: 25px; padding-bottom: 25px; padding-left: 2px; padding-right: 2px">
                            <b-col sm="4">Number of day</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Type</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
        </div>
        <div class="animated fadeIn">
            <b-row>
                <b-col sm="6">
                    <b-card no-body style="width: 100%; height: 200px">
                        <b-card-header>
                            <h5 id="traffic" class="card-title mb-0" style="padding : 5px">Brief of Work Carried Out</h5>
                        </b-card-header>
                        <b-card-body
                            id="nav-scroller"
                            ref="content"
                            style="position:relative; height:300px; overflow-y:scroll;"> 
                            <b-row style="padding: 2px">
                                <b-col sm="12">isi </b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col sm="6">
                    <b-card no-body style="width: 100%; height: 200px">
                        <b-card-header>
                            <h5 id="traffic" class="card-title mb-0" style="padding : 5px">Result of Assignment & Further Action</h5>
                        </b-card-header>
                        <b-card-body
                            id="nav-scroller"
                            ref="content"
                            style="position:relative; height:300px; overflow-y:scroll;"> 
                            <b-row style="padding: 2px">
                                <b-col sm="12">isi </b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </div>
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                    <b-col>
                        <b-row style="padding: 2px">
                            <b-col sm="4">BAI</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">TNC</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Selfie/Wefie at Site with time/location stamp</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Other</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
            
            <b-row>
                <b-col style="padding: 10px" class="text-right">
                    <b-button @click="submit" size="lg" variant="primary" style="margin: 10px">Approve</b-button>
                </b-col>
            </b-row>
        </div>
    </b-col>
  </b-row>
</template>
    