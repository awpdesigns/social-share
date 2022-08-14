// Get element by id
const share = document.getElementById('social-share');
// Split social accounts from data-share attribute
const socialAccounts = share.dataset.share.split(',');
// Create element a for each social account
socialAccounts.forEach(socialAccount => {
    // if social account includes 'facebook'
    if (socialAccount.includes('facebook')) {
        share.innerHTML += `<a href="#facebook" target="_blank" class="facebook" aria-label="Facebook" title="Share on Facebook"><i class="bx bxl-facebook"></i></a>`;
    }
    // if social account includes 'twitter'
    if (socialAccount.includes('twitter')) {
        share.innerHTML += `<a href="#twitter" target="_blank" class="twitter" aria-label="Twitter" title="Share on Twitter"><i class="bx bxl-twitter"></i></a>`;
    }
    // if social account includes 'google-plus'
    if (socialAccount.includes('google-plus')) {
        share.innerHTML += `<a href="#google-plus" target="_blank" class="google-plus" aria-label="Google Plus" title="Share on Google Plus"><i class="bx bxl-google-plus"></i></a>`;
    }
    // if social account includes 'pinterest'
    if (socialAccount.includes('pinterest')) {
        share.innerHTML += `<a href="#pinterest" target="_blank" class="pinterest" aria-label="Pinterest" title="Share on Pinterest"><i class="bx bxl-pinterest"></i></a>`;
    }
    // if social account includes 'linkedin'
    if (socialAccount.includes('linkedin')) {
        share.innerHTML += `<a href="#linkedin" target="_blank" class="linkedin" aria-label="LinkedIn" title="Share on LinkedIn"><i class="bx bxl-linkedin"></i></a>`;
    }
    // if social account includes 'whatsapp'
    if (socialAccount.includes('whatsapp')) {
        share.innerHTML += `<a href="#whatsapp" target="_blank" class="whatsapp" aria-label="Whatsapp" title="Share on Whatsapp"><i class="bx bxl-whatsapp"></i></a>`;
    }
    // if social account includes 'telegram'
    if (socialAccount.includes('telegram')) {
        share.innerHTML += `<a href="#telegram" target="_blank" class="telegram" aria-label="Telegram" title="Share on Telegram"><i class="bx bxl-telegram"></i></a>`;
    }
    // if social account includes 'skype'
    if (socialAccount.includes('skype')) {
        share.innerHTML += `<a href="#skype" target="_blank" class="skype" aria-label="Skype" title="Share on Skype"><i class="bx bxl-skype"></i></a>`;
    }
    // if social account includes 'email'
    if (socialAccount.includes('email')) {
        share.innerHTML += `<a href="#email" target="_blank" class="email" aria-label="Email" title="Send to Email"><i class="bx bx-envelope"></i></a>`;
    }
    // if social account includes 'gmail'
    if (socialAccount.includes('gmail')) {
        share.innerHTML += `<a href="#gmail" target="_blank" class="gmail" aria-label="Gmail" title="Send to Gmail"><i class="bx bxl-gmail"></i></a>`;
    }
    // if social account includes 'print'
    if (socialAccount.includes('print')) {
        share.innerHTML += `<a href="#print" class="print" aria-label="Print" title="Print this Page"><i class="bx bx-printer"></i></a>`;
    }
    // if social account includes 'copy'
    if (socialAccount.includes('copy')) {
        share.innerHTML += `<input type="hidden" name="copy-link" id="copy-link" value="${window.location.href}" data-message="URL ${document.title} has been copied!"/>`;
        // Get title of page
        share.innerHTML += `<a href="#copy" class="copy" aria-label="Copy to clipboard" title="Copy this url"><i class="bx bx-copy-alt"></i></a>`;
    }
});

// Share find a each function on click
const shareFind = document.querySelectorAll('#social-share a');
// Get inner html of element with attribute data-content if it exists
const shareContent = document.querySelector('[data-content]') ? document.querySelector('[data-content]').innerHTML : '';
shareFind.forEach(share => {
    // Add click event to each share
    share.addEventListener('click', function (e) {
        // Prevent default action
        e.preventDefault();
        // Get share href
        const shareHref = this.getAttribute('href');
        if (shareHref === '#facebook') {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, 'facebook-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
            return;
        }
        if (shareHref === '#twitter') {
            if (shareContent) {
                window.open('https://twitter.com/intent/tweet?url=Title:%20' + document.title + '%0AContent:%20' + shareContent + '%0ALink%20url:%20' + window.location.href, 'twitter-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
                return;
            } else {
                window.open('https://twitter.com/intent/tweet?url=Title:%20' + document.title + '%0ALink%20url:%20' + window.location.href, 'twitter-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
                return;
            }
        }
        if (shareHref === '#google-plus') {
            window.open('https://plus.google.com/share?url=' + window.location.href, 'googleplus-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
            return;
        }
        if (shareHref === '#pinterest') {
            if (shareContent) {
                window.open('https://pinterest.com/pin/create/button/?url=' + window.location.href + '&description=' + shareContent, 'pinterest-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
                return;
            } else {
                window.open('https://pinterest.com/pin/create/button/?url=' + window.location.href, 'pinterest-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
            return;
            }
        }
        if (shareHref === '#linkedin') {
            window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + window.location.href, 'linkedin-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
            return;
        }
        if (shareHref === '#whatsapp') {
            if (shareContent) {
                window.open('whatsapp://send?text=Title:%20' + document.title + '%0AContent:%20' + shareContent + '%0ALink%20url:%20' + window.location.href, 'whatsapp-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
                return;
            } else {
                window.open('whatsapp://send?text=Title:%20' + document.title + '%0ALink%20url:%20' + window.location.href, 'whatsapp-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
                return;
            }
        }
        if (shareHref === '#telegram') {
            if (shareContent) {
                window.open('https://telegram.me/share/url?url=Title:%20' + document.title + '%0AContent:%20' + shareContent + '%0ALink%20url:%20' + window.location.href, 'telegram-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
                return;
            } else {
                window.open('https://telegram.me/share/url?url=Title:%20' + document.title + '%0ALink%20url:%20' + window.location.href, 'telegram-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
                return;
            }
        }
        if (shareHref === '#skype') {
            if (shareContent) {
                window.open('https://web.skype.com/share?url=' + window.location.href + '&text=' + shareContent, 'skype-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
                return;
            } else {
                window.open('https://web.skype.com/share?url=' + window.location.href, 'skype-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
                return;
            }
        }
        if (shareHref === '#email') {
            if (shareContent) {
                window.location.href = 'mailto:?subject=Page:%20' + document.title + '&body=Title:%20' + document.title + '%0AContent:%20' + shareContent + '%0ALink%20url:%20' + window.location.href;
                return;
            } else {
                window.location.href = 'mailto:?subject=Page:%20' + document.title + '&body=Title:%20' + document.title + '%0ALink%20url:%20' + window.location.href;
                return;
            }
        }
        if (shareHref === '#gmail') {
            if (shareContent) {
                window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=Page:%20' + document.title + '&body=Title:%20' + document.title + '%0AContent:%20' + shareContent + '%0ALink%20url:%20' + window.location.href, 'gmail-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
            } else {
                window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=Page:%20' + document.title + '&body=Title:%20' + document.title + '%0ALink%20url:%20' + window.location.href, 'gmail-share-dialog', 'width=626,height=436,scrollbars=yes,resizable=yes');
                return;
            }
        }
        if (shareHref === '#print') {
            window.location.href = 'javascript:window.print()';
            return;
        }
        if (shareHref === '#copy') {
            window.location.href = 'javascript:copyText()';
            return;
        }
    });
});

// Copy to clipboard
function copyText() {
    let content = document.getElementById('copy-link').value;
    let dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = content;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    // Change copy icon to checkmark
    document.getElementsByClassName('copy')[0].innerHTML = `<i class="bx bx-check" style="color: #DAE6FC;"></i>`;
    // Change background-color
    document.getElementsByClassName('copy')[0].style.backgroundColor = '#27C451';
    // Change color
    document.getElementsByClassName('copy')[0].style.color = '#FFFFFF';

    // Alert Copy to clipboard
    document.getElementsByClassName('alert-copied')[0].removeAttribute('hidden');
    document.getElementsByClassName('alert-copied')[0].innerHTML = document.getElementById('copy-link').dataset.message;
    setTimeout(function () {
        document.getElementsByClassName('alert-copied')[0].setAttribute('hidden', true);
        document.getElementsByClassName('copy')[0].innerHTML = `<i class="bx bx-copy-alt"></i>`;
        document.getElementsByClassName('copy')[0].removeAttribute('style');
    }, 3000);
}

// Window size < 576px
if (window.innerWidth < 576) {
    // add class active to share-title when clicked
    document.querySelector('.share-title').addEventListener('click', function () {
        document.querySelector('.share-title').classList.toggle('active');
        if (document.querySelector('.share-title').classList.contains('active')) {
            // Create backdrop element
            let backdrop = document.createElement('div');
            backdrop.classList.add('backdrop');
            // Create close button element
            let closeButton = document.createElement('button');
            closeButton.classList.add('close');
            closeButton.innerHTML = '<i class="bx bx-x"></i>';
            // Create span element
            let strong = document.createElement('strong');
            strong.innerHTML = 'Share to:';
            document.body.prepend(backdrop);
            document.getElementById('social-share').prepend(closeButton);
            document.getElementById('social-share').prepend(strong);
            backdrop.addEventListener('click', function () {
                document.querySelector('.share-title').classList.remove('active');
                document.body.removeChild(backdrop);
                document.getElementById('social-share').removeChild(closeButton);
                document.getElementById('social-share').removeChild(strong);
            });
            closeButton.addEventListener('click', function () {
                document.querySelector('.share-title').classList.remove('active');
                document.body.removeChild(backdrop);
                document.getElementById('social-share').removeChild(closeButton);
                document.getElementById('social-share').removeChild(strong);
            });
        }
    });

}