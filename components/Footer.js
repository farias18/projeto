import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <>
            <footer class="text-center text-lg-start bg-white text-muted ">
                <section class="">
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3 text-secondary"></i>Company name
                                </h6>
                                <p>
                                    Empresa <strong>fariascompany</strong> voltada para não te fazer esquecer de nenhuma tarefa.
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fas fa-home me-3 text-secondary"></i> Brasília, BR</p>
                                <p>
                                    <i class="fas fa-envelope me-3 text-secondary"></i>
                                    samuel.teixeira@iesb.edu.br
                                </p>
                                <p><i class="fas fa-phone me-3 text-secondary"></i> 4002-8922 </p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>

        </>
    )
}

export default Footer