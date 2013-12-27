(function($){
	$.fn.validettaLanguage = function(){	
	}
	$.validettaLanguage = {
		init : function(){
			$.validettaLanguage.messages = {
        empty   : '必須項目ですので入力をお願いします。',
        email   : 'メールアドレスの入力をお願いします。',
        number    : '半角数字の入力をお願いします。',
        maxLength : 'Maximum {count} characters allowed!',
        minLength : 'Minimum {count} characters allowed!',
        checkbox  : 'このチェックボックスは必須項目です。',
        maxChecked  : 'Maximum {count} options allowed. Please be sure to check.',
        minChecked  : 'Please select minimum {count} options.',
        selectbox : '選択をお願いします。',
        maxSelected : 'Maximum {count} selection allowed. Please be sure to check.',
        minSelected : 'Minimum {count} selection allowed. Please be sure to check.',
        notEqual  : '項目がマッチできませんでした。ご確認ください。',
        creditCard  : 'Invalid credit card number. Please be sure to check.'
			};
		}
	}
	$.validettaLanguage.init();
})(jQuery);