<!-- Google Tag Manager -->
<script>window.dataLayer = window.dataLayer || [];</script>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TWP3JWF');</script>
!-- End Google Tag Manager -->
<script>
window.dataLayer = window.dataLayer || [];
</script>

{%comment%}
Dynamic remarketing code setup
{%endcomment%}

<script type = "text/javascript">
var google_tag_params = {
ecomm_prodid:[{% for line_item in order.line_items %}'{{ line_item.variant.sku }}'{% unless forloop.last %},{% endunless %}{% endfor %}],
ecomm_pname:  [{% for line_item in order.line_items %}'{{ line_item.title }}'{% unless forloop.last %},{% endunless %}{% endfor %}],
ecomm_totalvalue: [{% for line_item in order.line_items %}{{ line_item.price| money_without_currency | remove: ","}}{% unless forloop.last %},{% endunless %}{% endfor %}],  
ecomm_pagetype: 'purchase',
user_id: '{{ customer.id }}',
ecomm_totalvalue: {{ total_price | money_without_currency | remove: "," }}
};
</script>

<script>
window.dataLayer=window.dataLayer||[];
dataLayer.push ({   
  'event':'dynamicRemarketingTriggered',
  'google_tag_params': window.google_tag_params
});
</script>


{% if first_time_accessed %}
<script>
dataLayer.push ({   
  'event': 'transactionSuccess',
  'transactionTotal':'{{ total_price | money_without_currency | remove: "," }}',
  'transactionId': '{{order.order_number}}',
  'transactionCurrency': '{{shop.currency}}',
  'google_tag_params': window.google_tag_params
});
</script>
{% endif %}
<script>
window.snapppt_order_number = '{{ order_number }}';
window.snapppt_order_total = '{{ total_price }}';
window.snapppt_order_currency = '{{ shop.currency }}';
window.snapppt_account = "a4acbffd-5f4f-47a3-92ad-efb0d81dade2";
</script>
<script src="//snapppt.com/conversion-tracker.js" defer></script>
