<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col sm="6">
                <b-card header="Form Ijin Menber">
                    <b-col>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Name</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text"
                                    id="name"
                                    placeholder="Name"
                                    style="border-radius: 5px">
                                </b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding-top: 25px; padding-bottom: 25px; padding-left: 2px; padding-right: 2px">
                            <b-col sm="4">Number of day</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="number"
                                    id="number"
                                    placeholder="number of day"
                                    style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-card>
            </b-col>
            <b-col sm="6">
                <b-card header="Application Date">
                        <b-row style="padding: 2px">
                            <b-col sm="4">Date</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="date"
                                    id="date"
                                    style="border-radius: 5px; vertical-align: center">
                                </b-form-input>
                            </b-col>
                        </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
