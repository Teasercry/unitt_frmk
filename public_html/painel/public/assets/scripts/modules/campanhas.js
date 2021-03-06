$(document).ready(function(){

    if( $('#UrlsLista').length ){
    
      /**
       * Incremento de informações dinamicas
       *
       */
       var ct_field = 1;
       var ct_condicional_row = 1;
       var Urls  = JSON.parse($('#UrlsLista').val());
       var Tipos = JSON.parse($('#TiposLista').val());

       $(document).on('click', '.ActionButton', function(){

          var obj           = $(this);  
          var action        = obj.data('action');
          var example       = obj.parent().parent();
          var content       = obj.parent().parent().parent().parent().parent();
          var type          = obj.data('type');

           if( type == 'urls' ){

              if( action == 'add' ){

                  ct_field = $('.UrlsRow').length+1;
                  
                  html='<div class="row UrlsRow">';
                      html+='<div class="col-sm-12">';
                        html+='<div class="row">';
                          html+='<div class="col-xs-4">';
                            //html+='<select name="URLs['+ct_condicional_row+']['+ct_field+'][id_url]" class="select2" style="width:100%;">';
                              //html+='<option value="">Selecione:</option>';
                              //$.each(Urls, function(key,val){
                               // html+='<option value="'+val.id+'">'+val.url+'</option>';
                              //});
                            //html+='</select>';
                          html+='</div>';
                          html+='<div class="col-xs-2">';
                            html+='<input type="text" name="URLs['+ct_condicional_row+']['+ct_field+'][parametro]" class="form-control" placeholder="Parâmetro">';
                          html+='</div>';
                          html+='<div class="col-xs-2">';
                            html+='<select name="URLs['+ct_condicional_row+']['+ct_field+'][tipo]" class="select2" style="width:100%;">';
                              $.each(Tipos, function(key,val){
                                html+='<option value="'+key+'">'+val+'</option>';
                              });
                            html+='</select>';
                          html+='</div>';
                          html+='<div class="col-xs-2">';
                            html+='<input type="text" name="URLs['+ct_condicional_row+']['+ct_field+'][valor]" class="form-control" placeholder="Valor">';
                          html+='</div>';
                          html+='<div class="col-xs-2">';
                            html+='<button type="button" data-action="add" class="btn btn-success btn-round btn-icon-icon mr5 ActionButton" data-type="urls">';
                              html+='<i class="icon-plus"></i>';
                          html+='</button>';
                          html+='</div>';
                        html+='</div>';
                      html+='</div>';
                    html+='</div>';
                  html+='</div>';

                  content.append(html);
                  ct_field++;

                  if($('.UrlsRow').length > 2){
                    obj.removeClass('btn-success');
                    obj.addClass('btn-danger');
                    obj.find('i').removeClass('icon-plus');
                    obj.find('i').addClass('icon-close');
                    obj.data('action','del');
                  } else {
                    obj.remove();
                  }
                  
                  defineMasks();

              } else {

                  if($('.UrlsRow').length > 1){
                    obj.parent().parent().remove();

                  }

              }
          } else if( type == 'produtos' ){

              if( action == 'add' ){

                  ct_field = $('.ProdutosRow').length+1;

                  var Produtos = JSON.parse($('#ProdutosLista').val());
                  
                  html='<div class="row ProdutosRow">';
                    html+='<div class="col-sm-12">';
                      html+='<div class="row" style="margin-bottom:10px;">';
                        html+='<div class="col-xs-4">';
                          html+='<select name="Produtos['+ct_field+'][id_produto]" class="select2" style="min-width:310px;">';
                            html+='<option value="">Selecione:</option>';
                            $.each(Produtos, function(key,val){
                              html+='<option value="'+val.id+'">'+val.nome+'</option>';
                            });
                          html+='</select>';
                        html+='</div>';
                        html+='<div class="col-xs-2">';
                          html+='<input type="text" name="Produtos['+ct_field+'][preco]" class="form-control float_number" placeholder="Preço">';
                        html+='</div>';
                        html+='<div class="col-xs-2">';
                          html+='<input type="text" name="Produtos['+ct_field+'][parcelas]" class="form-control only_numbers" placeholder="Parcelas">';
                        html+='</div>';
                        html+='<div class="col-xs-2">';
                          html+='<button type="button" data-action="add" class="btn btn-success btn-round btn-icon-icon mr5 ActionButton" data-type="produtos">';
                            html+='<i class="icon-plus"></i>';
                        html+='</button>';
                        html+='</div>';
                      html+='</div>';
                    html+='</div>';
                  html+='</div>';

                  content.append(html);
                  ct_field++;

                  obj.removeClass('btn-success');
                  obj.addClass('btn-danger');
                  obj.find('i').removeClass('icon-plus');
                  obj.find('i').addClass('icon-close');
                  obj.data('action','del');
                  
                  defineMasks();
              } else {

                  if($('.ProdutosRow').length > 1){
                    obj.parent().parent().remove();
                  }

              }
          } else if( type == 'kits' ){

              if( action == 'add' ){

                  ct_field = $('.KitsRow').length+1;

                  var Kits = JSON.parse($('#KitsLista').val());
                  
                  html='<div class="row KitsRow">';
                    html+='<div class="col-sm-6">';
                      html+='<div class="row" style="margin-bottom:10px;">';
                        html+='<div class="col-sm-8">';
                          html+='<select name="Kits['+ct_field+'][id_kit]" class="select2" style="min-width:310px;">';
                            html+='<option value="">Selecione:</option>';
                            $.each(Kits, function(key,val){
                              html+='<option value="'+val.id+'">['+val.id+'] - '+val.nome+'</option>';
                            });
                          html+='</select>';
                        html+='</div>';
                        html+='<div class="col-sm-2">';
                        html+='</div>';
                      html+='</div>';
                    html+='</div>';

                    html+='<div class="col-sm-6">';
                      html+='<div class="row" style="margin-bottom:10px;">';
                        html+='<div class="col-sm-8">';
                          html+='<select name="Kits['+ct_field+'][id_kit_b]" class="select2" style="min-width:310px;">';
                            html+='<option value="">Selecione:</option>';
                            $.each(Kits, function(key,val){
                              html+='<option value="'+val.id+'">['+val.id+'] - '+val.nome+'</option>';
                            });
                          html+='</select>';
                        html+='</div>';
                        html+='<div class="col-sm-2">';
                          html+='<button type="button" data-action="add" class="btn btn-success btn-round btn-icon-icon mr5 ActionButton" data-type="kits">';
                            html+='<i class="icon-plus"></i>';
                        html+='</button>';
                        html+='</div>';
                      html+='</div>';
                    html+='</div>';

                  html+='</div>';

                  content.append(html);
                  ct_field++;

                  obj.removeClass('btn-success');
                  obj.addClass('btn-danger');
                  obj.find('i').removeClass('icon-plus');
                  obj.find('i').addClass('icon-close');
                  obj.data('action','del');
                  
                  defineMasks();
              } else {

                  if($('.KitsRow').length > 1){
                    obj.parent().parent().parent().parent().remove();
                  }

              }
          }

          return false;

        });

      $('#BtnAdicionarCondicional').on('click', function(){

          var Urls      = JSON.parse($('#UrlsLista').val());
          var Tipos     = JSON.parse($('#TiposLista').val());
          var html      = '';
          ct_field      = $('.UrlsRow').length+1;
          ct_condicional_row = $('.condicionalRow').length+1;

          html+='<div class="card-block alert alert-warning paddingUrls condicionalRow">';
              html+='<div class="row UrlsRow">';
                html+='<div class="col-sm-12">';
                  html+='<div class="row">';
                    html+='<div class="col-xs-4">';
                      html+='<select name="URLs['+ct_condicional_row+']['+ct_field+'][id_url]" class="select2" style="width:100%;">';
                        html+='<option value="">Selecione:</option>';
                        $.each(Urls, function(key,val){
                          html+='<option value="'+val.id+'">'+val.url+'</option>';
                        });
                      html+='</select>';
                    html+='</div>';
                    html+='<div class="col-xs-2">';
                      html+='<input type="text" name="URLs['+ct_condicional_row+']['+ct_field+'][parametro]" class="form-control" placeholder="Parâmetro">';
                    html+='</div>';
                    html+='<div class="col-xs-2">';
                      html+='<select name="URLs['+ct_condicional_row+']['+ct_field+'][tipo]" class="select2" style="width:100%;">';
                        $.each(Tipos, function(key,val){
                          html+='<option value="'+key+'">'+val+'</option>';
                        });
                      html+='</select>';
                    html+='</div>';
                    html+='<div class="col-xs-2">';
                      html+='<input type="text" name="URLs['+ct_condicional_row+']['+ct_field+'][valor]" class="form-control" placeholder="Valor">';
                    html+='</div>';
                    html+='<div class="col-xs-2">';
                      html+='<button type="button" data-action="add" class="btn btn-success btn-round btn-icon-icon mr5 ActionButton" data-type="urls">';
                        html+='<i class="icon-plus"></i>';
                    html+='</button>';
                    html+='</div>';
                  html+='</div>';
                html+='</div>';
              html+='</div>';
            html+='</div>';
          html+='</div>';

          $('#BoxCondicionalRows').append(html);
          defineMasks();

      });
    }

    if( $('#FormFiltros').length ){

      $('#FormFiltros').on('submit', function(){

        $('#ModalSearch').modal('hide');
        $.blockUI();
        return true;

      });
    }
});