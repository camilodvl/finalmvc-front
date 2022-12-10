<template>
    <div class="container d-flex justify-content-center">
        <h1>Malla curricular</h1>
    </div>

    <div class="container d-flex justify-content-center">
        <template v-for="curso in cursos">
            <template v-if="curso.pivot.semester == 1">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ curso.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Semestre {{ curso.pivot.semester }}</h6>
                        <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="'#'+curso.name">
                            Detalles
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" v-bind:id="curso.name" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{{curso.name}}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p><strong>Creditos:</strong> {{curso.credits}}</p>
                                        <p><strong>Pre-Requisito:</strong> {{curso.pre_requisite}}</p>
                                        <p><strong>Profesor:</strong> {{curso.teacher}}</p>
                                        <p><strong>Horas autonomas:</strong> {{curso.a_hours}}</p>
                                        <p><strong>Horas dirigidas:</strong> {{curso.d_hours}}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </template>
        </template>
    </div>

    <div class="container d-flex justify-content-center">
        <template v-for="curso in cursos">
            <template v-if="curso.pivot.semester == 2">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ curso.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Semestre {{ curso.pivot.semester }}</h6>
                        <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="'#'+curso.name">
                            Detalles
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" v-bind:id="curso.name" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{{curso.name}}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p><strong>Creditos:</strong> {{curso.credits}}</p>
                                        <p><strong>Pre-Requisito:</strong> {{curso.pre_requisite}}</p>
                                        <p><strong>Profesor:</strong> {{curso.teacher}}</p>
                                        <p><strong>Horas autonomas:</strong> {{curso.a_hours}}</p>
                                        <p><strong>Horas dirigidas:</strong> {{curso.d_hours}}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </template>
        </template>
    </div>

    <div class="container d-flex justify-content-center">
        <template v-for="curso in cursos">
            <template v-if="curso.pivot.semester == 3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ curso.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Semestre {{ curso.pivot.semester }}</h6>
                        <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="'#'+curso.name">
                            Detalles
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" v-bind:id="curso.name" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{{curso.name}}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p><strong>Creditos:</strong> {{curso.credits}}</p>
                                        <p><strong>Pre-Requisito:</strong> {{curso.pre_requisite}}</p>
                                        <p><strong>Profesor:</strong> {{curso.teacher}}</p>
                                        <p><strong>Horas autonomas:</strong> {{curso.a_hours}}</p>
                                        <p><strong>Horas dirigidas:</strong> {{curso.d_hours}}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </template>
        </template>
    </div>

    <div class="container d-flex justify-content-center">
        <template v-for="curso in cursos">
            <template v-if="curso.pivot.semester == 4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ curso.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Semestre {{ curso.pivot.semester }}</h6>
                        <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="'#'+curso.name">
                            Detalles
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" v-bind:id="curso.name" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{{curso.name}}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p><strong>Creditos:</strong> {{curso.credits}}</p>
                                        <p><strong>Pre-Requisito:</strong> {{curso.pre_requisite}}</p>
                                        <p><strong>Profesor:</strong> {{curso.teacher}}</p>
                                        <p><strong>Horas autonomas:</strong> {{curso.a_hours}}</p>
                                        <p><strong>Horas dirigidas:</strong> {{curso.d_hours}}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </template>
        </template>
    </div>

    <div class="container d-flex justify-content-center">
        <template v-for="curso in cursos">
            <template v-if="curso.pivot.semester == 5">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ curso.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Semestre {{ curso.pivot.semester }}</h6>
                        <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="'#'+curso.name">
                            Detalles
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" v-bind:id="curso.name" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{{curso.name}}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p><strong>Creditos:</strong> {{curso.credits}}</p>
                                        <p><strong>Pre-Requisito:</strong> {{curso.pre_requisite}}</p>
                                        <p><strong>Profesor:</strong> {{curso.teacher}}</p>
                                        <p><strong>Horas autonomas:</strong> {{curso.a_hours}}</p>
                                        <p><strong>Horas dirigidas:</strong> {{curso.d_hours}}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </template>
        </template>
    </div>

    <div class="container d-flex justify-content-center">
        <template v-for="curso in cursos">
            <template v-if="curso.pivot.semester == 6">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ curso.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Semestre {{ curso.pivot.semester }}</h6>
                        <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="'#'+curso.name">
                            Detalles
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" v-bind:id="curso.name" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{{curso.name}}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p><strong>Creditos:</strong> {{curso.credits}}</p>
                                        <p><strong>Pre-Requisito:</strong> {{curso.pre_requisite}}</p>
                                        <p><strong>Profesor:</strong> {{curso.teacher}}</p>
                                        <p><strong>Horas autonomas:</strong> {{curso.a_hours}}</p>
                                        <p><strong>Horas dirigidas:</strong> {{curso.d_hours}}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </template>
        </template>
    </div>



</template>

<script>
import axios from 'axios';

export default {

    data() {
        return {
            id: this.$route.params.id,
            programa: [],
            cursos: []
        }
    },

    created() {
        fetch('http://127.0.0.1:8000/api/program/' + this.id)
            .then(response => response.json())
            .then((data) => (this.programa = data))
            .then((data) => (this.cursos = data.courses))
    }
}
</script>