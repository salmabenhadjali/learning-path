<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\String\u;

class VinylController
{
    #[Route('/')]
    function homepage(): Response
    {
        return new Response('Hello worl from Response !');
    }

    #[Route('/browse/{slug}')]
    function browse(?string $slug = null): Response
    {
        if ($slug) {
            $title = 'Genre : ' . u(str_replace('-', ' ', $slug))->title(true);
        } else {
            $title = "All genres";
        }

        return new Response($title);
    }
}
