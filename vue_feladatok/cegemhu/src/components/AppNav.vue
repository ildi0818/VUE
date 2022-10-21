<template>
  <div class="container">
       <nav class="navbar navbar-expand-sm navbar-dark bg-primary" >
           
           <a class="navbar-brand" href="#">Cegem.hu</a>

           <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
               aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
           </button>

           <div class="collapse navbar-collapse" id="collapsibleNavId">

               <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                   <li class="nav-item active">
                       <a class="nav-link" href="#nyito">Nyitó oldal</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#rolunk">Rólunk</a>
                   </li>
                   <li class="nav-item">
                        <a class="nav-link" href="#szolgaltatas">Szolgáltatások</a>
                    </li>   
                    <li class="nav-item">
                        <a class="nav-link" href="#kapcsolat">Kapcsolat</a>
                    </li>
                </ul>
           </div>
       </nav>
    </div>
</template>

<script>
export default {
    name: 'app-nav'
}
</script>

<style>

</style>